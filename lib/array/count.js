'use strict'

function count(arr) {
    var counts = {}
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    return counts
}

var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4]
var res = count(arr)
console.log(res[5]) // 3