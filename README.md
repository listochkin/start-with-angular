start-with-angular
==================

Sample Angular App

How to Start with Lineman
-------------------------

    npm i -g lineman

    git clone https://github.com/linemanjs/lineman-angular-template.git client

    cd client && rm -rf .git

    npm i
    npm i --ignore-scripts ; if you have issues with some plugins

In two tabs do the following:

    lineman run
    lineman spec

To run e2e tests:
-----------------

    npm i -SD protractor
    npm i -g watch

    watch 'lineman grunt spec-e2e' ./spec-e2e/ --wait=1
