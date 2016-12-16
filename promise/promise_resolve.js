let arr = [null, 0, 'hello',
    {then: function(){ console.log(' a thenable obj') }}
];

arr.map((value) => {
    return Promise.resolve(value);
});

console.log(arr);
