let p = Promise.reject('fail');
p.catch((err) => {
    console.log(err);
});