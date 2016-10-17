'use strict'

var count = 0
function countUp() {
    try {
        return count
    } finally {
        count++
    }
}

console.log(countUp())

console.log(count)
