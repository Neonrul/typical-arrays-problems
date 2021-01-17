exports.min = (array = []) =>  Math.min(0, ...array)

exports.max = (array = []) => Math.max(0, ...array)

exports.avg = (array = []) => array.length !== 0 ? array.reduce((sum, item) => sum + item, 0) / array.length : 0
