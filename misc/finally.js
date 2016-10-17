'use strict'

function cleansUp() {
    try {
        throw new Error('出错了...')
        console.log('不错执行这行')
    } finally {
        console.log('完成清理工作')
    }
}

cleansUp()