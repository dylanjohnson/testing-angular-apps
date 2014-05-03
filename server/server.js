var express = require('express'),
    config = require('./config.js'),
    path = require('path'),
    fileSystem = require('node-fs'),
    app = express();

app
    .use(express.static(config.app_dir))
    .listen(config.port);

console.log('Serving static content from: ' + config.app_dir);

app.get('/vendor/:vendorName/release/:vendorFile', function (request, response) {
    var vendorDir = path.resolve('./vendor'),
        vendorPath = '/' + request.params.vendorName + '/release/' + request.params.vendorFile,
        resourcePath = vendorDir + vendorPath;

    console.log('Returning release resource at path: ' + resourcePath);

    response.status(200).send(fileSystem.readFileSync(resourcePath));
});

app.get('/vendor/:vendorName/:vendorFile', function (request, response) {
    var vendorDir = path.resolve('./vendor'),
        vendorPath = '/' + request.params.vendorName + '/' + request.params.vendorFile,
        resourcePath = vendorDir + vendorPath;

    console.log('Returning resource at path: ' + resourcePath);

    response.status(200).send(fileSystem.readFileSync(resourcePath));
});