#!/bin/bash

REMOTE_UPDATE_BRANCH=$(git branch -r | grep "$UPDATE_BRANCH")

git config --global user.email $USER_EMAIL
git config --global user.name $USER_NAME

if [[ -z "$REMOTE_UPDATE_BRANCH" ]]; then
  git switch --orphan $UPDATE_BRANCH
else
  git checkout $UPDATE_BRANCH
fi

if [[ ! -f "index.html" ]]; then
  git checkout $GITHUB_REF_NAME -- .github/files/redirect.html
  git rm --cached .github/files/redirect.html
  mv .github/files/redirect.html ./index.html
  git add index.html
  git commit -m 'Add a root index file to redirect to the latest doc version'
  git push --set-upstream origin $UPDATE_BRANCH
fi
