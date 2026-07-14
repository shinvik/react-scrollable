#!/bin/bash

git config --global user.email $USER_EMAIL
git config --global user.name $USER_NAME

# Get doc last version using tag list
tags=$(git tag --list 'v*')
sorted=($(printf '%s\n' "${tags[@]}" | sort -V))
if [[ ! ${#sorted[@]} -eq 0 ]]; then
  package_last_version=${sorted[-1]}
fi
# Get doc current version using package.json
package_version="v$(npm pkg get version --workspaces=false | tr -d '"')"

# Install dependencies
npm ci
# Build Storybook Docs
npm run build && npm run build-storybook-docs

# Checkout branch to DEPLOY_BRANCH
if [[ -z "$DEPLOY_BRANCH" ]]; then
  git switch --orphan $DEPLOY_BRANCH
else
  git checkout $DEPLOY_BRANCH
fi

# Add a root index file if missing, to redirect to the latest doc version
if [[ ! -f "index.html" ]]; then
  git checkout $GITHUB_REF_NAME -- .github/files/redirect.html
  git rm --cached .github/files/redirect.html
  mv .github/files/redirect.html ./index.html
  git add index.html
fi

mv ./storybook-static ./$package_version
git add ./$package_version
if [[ "$package_last_version" == "$package_version" ]]; then
  cp -r ./$package_version ./latest
  git add ./latest
fi

git commit -m "Deploy docs for $package_version"
git push --set-upstream origin $DEPLOY_BRANCH