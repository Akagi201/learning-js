let p = new Promise((resolve, reject) => {
    resolve();
});

p.then(() => {
    console.log('progress...');
}).then(() => {
    throw new Error('fail');
}).catch((err) => {
    console.log(err);
});
