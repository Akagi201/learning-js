var promise = new Promise(function(resolve, reject){
    var flag = Math.random();
    setTimeout(function() {
        if(flag > 0.5) {
            resolve('success');
        } else {
            reject('fail');
        }
    }, 1000);
});

console.log(promise);

promise.then(function(result) {
    console.log(result);
}, function(err) {
    console.log(err);
});
