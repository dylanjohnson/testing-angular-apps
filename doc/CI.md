# Continuous Integration

## Travis
Travis is a free continuous integration service that was born to run for GitHub projects. I intended to have a travis
implementation working for this meetup/demo. I do not. Sue me.

Again, [angular-app](https://github.com/angular-app/angular-app/blob/master/.travis.yml) is a good place to look for an example here.

## Jenkins
Jenkins is the best CI system out there. It's very mature, it has a plugin for everything, and it allows you to write
your build script as a free-form bash script that pushes the build up to the next stage in the stream as long as nothing
exits non-zero. If you don't think Jenkins is the best, I am sorry about your confusion.

I don't have any examples here, because all you have to do is write a bash script that calls `grunt test` or
`grunt karma` or any manual test running command, and if it fails, your build fails, and Jenkins gives you a red light
and a rain cloud.

## Maven
Maven is a Java build tool used by a lot of big companies that use Java. I think Java has too many tools (though I did
just plug Jenkins...), but it's undeniably a good thing to know. There's a `maven-karma` plugin that's dead simple to
set up.

As for E2E with Protractor on Maven, you can do some super-Java-ey stuff where you set up a Tomcat container and run
your Java app inside of it, then run your features against that faux-backend... just go read [this](http://www.asgarddesigns.com.au/2013/11/end-to-end-testing-with-angularjs-protractor-grunt-and-maven/). Let me know
how your brain feels afterwards.