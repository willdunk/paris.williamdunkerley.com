#! /bin/bash
dir=$PWD/src
find "$dir" -type f -exec sha256sum {} \; | sed "s~$dir~~g" | LC_ALL=C sort -d | sha256sum | cut -d " " -f 1