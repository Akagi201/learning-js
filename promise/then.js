let p = new Promise((resolve, reject) => {
    let flag = Math.random() > 0.5 ? true : false;
    if (flag) {
        console.log('使用resolve将promise状态从pending变为resolved');
        resolve('success');
    } else {
        console.log('使用reject将promise状态从pending变为rejected');
        reject('fail');
    }
});

p.then((result) => {
    console.log('接受resolved的结果');
    console.log(result);
}, (err) => {
    console.log('捕获错误的结果');
    console.log(err);
})
