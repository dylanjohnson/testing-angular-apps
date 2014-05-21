# BDD

  - Dan North article
  - jBehave
  - BDD vs. TDD

# Protractor

  - official Angular E2E framework
  - uses Jasmine by default
  - offers mocha runner
  - Behaviorists use Cucumber
  - Chai is an alternative to Jasmine; preferable syntax (`to.be.empty`)
  - Chai as promised allows you to wait for promise resolution using `eventually`

# Installing the tools

  - clone this repo, or just steal the `package.json`; run `npm install` from the root
  - `npm install --save -g protractor`
  - `npm install --save cucumber`
  - `npm install --save chai`
  - `npm install --save chai-as-promised`
  - `node_modules/protractor/bin/webdriver-manager update` will update webdriver, the "magic" of protractor

# Writing a feature

  - the user story
  - scenarios
  - consulting with BA's
  - contrapositives

# Running the Features

  - using example repo, run `node_modules/protractor/bin/protractor test/protractor.conf.js`

# Using Generated Step Definitions

  - not great at RegEx? Just run the tests, and copy and paste the output
  - ALWAYS run before you start adding step defs; issues caused by duplicate defs can be very difficult to diagnose

# Writing Step Definition Assertions
When we run again, the slightly changed output indicates that we're making some progress. Since we added a pending
definition for our first step, Cucumber tells us that we have 1 pending scenario, 1 pending step, and 1 skipped step. So
now we need to implement some actual assertions.

# Putting step definitions in the appropriate context

  - since we said it's important not to duplicate step defs, make sure to put them in files where people will find them
  - acceptance criteria feature grouping
  - contextual grouping

# Using Tags to Limit the Number of Features Run

  - running a lot of scenarios can take forever
  - use the `tags` configuration parameter and accompanying annotation to group and run a set of related scenarios

===============

[Back to testing layers](Layers.md)