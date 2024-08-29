#!./bin/bash

# PRODUCTION
git reset --hard
git checkout develop
git pull origin master

npm i yarn -g
yarn global add serve
yarn
yarn run build
pm2 start "yarn run start:prod" --name=Safia-React