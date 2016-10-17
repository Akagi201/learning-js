'use strict'

function throwit() {
    throw new Error('')
}

function catchit() {
    try {
        throwit()
    } catch (error) {
        console.log(error.stack)
    }
}

catchit()
