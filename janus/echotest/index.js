'use strict';

const Janus = require('janus-gateway-js');

const EchoTest = require('./plugin/echotest');

let config = require('./config');

console.log(config, config.url);

let janus = new Janus.Client(config.url, config);
janus.createConnection('client')
    .then(function (connection) {
        return connection.createSession();
    })
    .then(function (session) {
        return session.attachPlugin(EchoTest.NAME);
    })
    .then(function (echotestPlugin) {
        return echotestPlugin.audio(true);
    });
