'use strict'

function f() {
    try {
        console.log(0)
        throw 'bug'
    } catch (e) {
        console.log(1)
        return true // 这句原本会延迟到finally代码块结束再执行
        console.log(2) // 不会运行
    } finally {
        console.log(3)
        return false // 这句会覆盖掉前面那句return
        console.log(4) // 不会运行
    }

    console.log(5) // 不会运行
}

var result = f()

console.log(result)
