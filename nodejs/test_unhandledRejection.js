
var promise = new Promise(function(resolve, reject) {
    reject(new Error("Broken."));
});

promise.then(function(result) {
    console.log(result);
});

process.on('unhandleRejection', function (err, p) {
    console.error(err.stack);
});