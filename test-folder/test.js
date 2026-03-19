const formatter = require('../package/index')

const date = "2024-02-15"
console.log (formatter.iso(date))
console.log(formatter.long(date))
console.log(formatter.short(date))
