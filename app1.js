const {createReadStream} = require('fs')



const stream = createReadStream('./content/bigfile.txt', 'utf8')

stream.on('error', function(err) {
    console.log('eroare')
});
stream.on('data', (result) => {
    console.log(result)
})
