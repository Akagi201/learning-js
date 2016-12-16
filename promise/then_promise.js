let p1 = new Promise((resolve, reject) => {
    let flag = Math.random() > 0.5 ? true : false;
    resolve();
});

// @2 使用then方法进行链式的调用
p1.then(() => {
    return 1;
}).then((result) => {
    console.log(result);
    return 'hello';
}).then((result) => {
    console.log(result);
});

// @3 在then方法内部可以再次使用异步的操作
p1.then(() => {
    console.log('******');
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(123);
        }, 1000);
    });
    return p2
}).then((result) => {
    console.log(result);
});
