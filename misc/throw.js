'use strict'

function throwIt(exception) {
    try {
        throw exception
    } catch (e) {
        console.log('Caught: ' + e)
    }
}

// Caught: 3
throwIt(3)

// Caught: hello
throwIt('hello')

// Caught: Error: An error happened
throwIt(new Error('An error happened'))
