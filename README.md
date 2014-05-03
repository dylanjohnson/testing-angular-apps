Testing AngularJS Applications
==============================
This repository accompanies a Meetup of the AngularJS Tampa group covering the tools, procedures, and conventions used
in testing AngularJS applications.

# Getting Started
**TODO:** use a Vagrant environment for all of this

  - make sure you have node and npm installed
  - install node module dependencies: `npm install`
  - install bower packages: `bower install`
  - install webdriver: `node_modules/protractor/bin/webdriver-manager update`
  - fire up the server: `node server/server.js`

# Running Tests
Tests can either be run manually as standalone processes via their node modules, using their individual Grunt tasks, or
all at the same time via the `grunt test` task.

## Manually
**E2E:** from the repo root, run `./node_modules/protractor/bin/protractor ./test/protractor.conf.js`