#!/bin/bash

package_name=$(npm pkg get name --workspaces=false | tr -d '"')
doc_version=$(npm pkg get version --workspaces=false | tr -d '"')
IFS="/" read -r owner repository_name var3 <<< $package_name
export DOC_LINK="https://${owner}.github.io/${repository_name}/v${doc_version}"
envsubst < .bin/files/README.md > README.md
git add README.md