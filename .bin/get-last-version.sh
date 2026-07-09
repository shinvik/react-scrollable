#!/bin/bash

tags=$(git tag --list 'v*')
sorted=($(printf '%s\n' "${tags[@]}" | sort -V))
if [[ ${#sorted[@]} -eq 0 ]]; then
  echo ""
else
  echo ${sorted[-1]}
fi