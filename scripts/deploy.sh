#!/usr/bin/env bash

yarn build &&
  cd build &&
  git init &&
  git add . &&
  git commit -m 'deploy' &&
  git remote add origin git@github.com:kunccc/xiyoAccount-website.git &&
  git push -u origin main -f
cd -
