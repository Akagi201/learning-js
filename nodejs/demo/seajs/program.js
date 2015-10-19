
define(function(require, exports, module) {
    var inc = require('./increment').increment;
    var a = 1;
    console.log(inc(a)); // 2
});
