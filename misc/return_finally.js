'use strict'

function idle(x) {
    try {
        console.log(x)
        return 'result'
    } finally {
        console.log('finally')
    }
}

console.log(idle('hello'))
