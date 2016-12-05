'use strict';

const Janus = require('janus-gateway-js');

function EchoTest() {
    Janus.MediaPlugin.apply(this, arguments);
}

EchoTest.NAME = 'janus.plugin.echotest';
EchoTest.prototype = Object.create(Janus.MediaPlugin.prototype);
EchoTest.prototype.constructor = EchoTest;

Janus.Plugin.register(EchoTest.NAME, EchoTest);

/**
 * @param {boolean} state
 * @returns {Promise}
 * @fulfilled {RTCSessionDescription} jsep
 */
EchoTest.prototype.audio = function (state) {
    let self = this;
    return Promise
        .try(function () {
            return self.getUserMedia({audio: true, video: false});
        })
        .then(function (stream) {
            self.createPeerConnection();
            stream.getTracks().forEach(function (track) {
                self.addTrack(track, stream);
            });
        })
        .then(function () {
            return self.createOffer();
        })
        .then(function (jsep) {
            let message = {body: {audio: state}, jsep: jsep};
            return self.sendWithTransaction(message);
        })
        .then(function (response) {
            let jsep = response.get('jsep');
            if (jsep) {
                self.setRemoteSDP(jsep);
                return jsep;
            }
        });
};

module.exports = EchoTest;
