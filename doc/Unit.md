# Unit Testing

Just like in any other language or framework, except with some BDD flavor.

# Installing the tools

Just use this repo, or maybe ngboilerplate, or the yeoman-angular if you like code generation, or `npm install --save`
all of the stuff I'm about to go through if you're hardcore.

# Jasmine
[Jasmine](http://jasmine.github.io/1.3/introduction.html) is the BDD "framework" for Javascript testing preferred by
Angular and many other JavaScript projects. That link goes to v1.3. There's also a 2.0, but I am going to talk as if it
doesn't exist because I'm scared of change. Quite simply, Jasmine is a way to express what you want to do, and to assert
that you've done it.

Alternatives to Jasmine include Mocha, Chai, Cucumber (aka the best), and various other food- and beverage-named Open
Source Libraries, to be sure.

# Karma
[Karma](http://karma-runner.github.io/0.12/index.html) was created by the Angular team. If you've chosen Angular as your
web development framework, you've chosen karma as your test runner. It's available via `npm install karma`. Karma can
run any browser, but I prefer to use the PhantomJS headless browser for my Unit Testing needs, because, by nature, Unit
tests aren't something I need to see. If you want to use another browser, you should do
`npm install karma-chromebrowser-launcher` (or whatever browser you'd like in place of "chrome").

It might be mislabelling Karma to call it a "Unit Testing" tool, since it can also run E2E tests (and before Protractor,
it was used for running angular "scenarios"), but I only use Karma for Unit Testing, so there you are.

# Examples

  - [Phonecat Controllers](https://github.com/angular/angular-phonecat/blob/master/test/unit/controllersSpec.js)
  - [angular-app](https://github.com/angular-app/angular-app/blob/master/client/test/unit/app/admin/projects/admin-projects.spec.js) (also the project from Mastering Web Application Development With AngularJS)
  - egghead [intro to karma](https://egghead.io/lessons/unit-testing-introduction-to-karma), [directive testing](https://egghead.io/lessons/angularjs-unit-testing-directive-scope), and (testing overview) [https://egghead.io/lessons/angularjs-testing-overview]

====================

[Back to testing layers](Layers.md)