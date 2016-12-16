let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() > 0.5 ? resolve('success'): reject('fail');
    }, 1000);
});

console.log(p);

p.then((result) => {
    console.log(result);
}, (err) => {
    console.log(err);
});
