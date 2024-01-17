const {readFile, writeFile} = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result
    writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
        if(err){
            console.log(err)
            return
        }
        console.log('done with this task')
    }) 
}) 
})
console.log('start next task')

// const {readFile} = require('fs')
// const getText = (path) =>{
//     return new Promise((resolve, reject) =>{
//         readFile(path, 'utf8', (err, data) =>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }

// const start = async() => {
//     try{
//         const first = await getText('./content/first.txt')
//         const second = await getText('./content/second.txt')
//         console.log(first + second)
//     }
//     catch(error){
//         console.log(err)
//     }
// }

// start()

// const {writeFileSync, writeFile} = require('fs')

// // for(let i = 0; i <= 10; i++){
// //     writeFileSync('./content/bigfile.txt', `hello world ${i}\n`, {flag: 'a'})
// // }

// for(let i = 11; i <= 20; i++)
//     writeFile('./content/bigfile.txt', `hello people ${i}\n`, {flag: 'a'}, (err, result) =>{})