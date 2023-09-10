// console.log(__dirname)
// console.log(__filename)
// console.log(require)
// console.log(module)    
// console.log(process)

// var i = 0;
// var GeosInterval;
// GeosInterval = setInterval(() => {
//     i++;
//     console.log('Hello Georgian' + i)
//     if(i == 10)
//         clearInterval()
// }, 1000);

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternativeFlavour')
console.log(names)
console.log(data)

sayHi(names.john)
sayHi(names.peter)

// sayHi(john)
// sayHi(peter)
// sayHi('Susan')