//npm - global command, comes with node
//npm --version or npm --v

//local dependency - use it only in this particular project\
//npm i <packageName>

//global dependecy - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (for mac)

//package.json -manifest file (stores important ifo about project/package)
//manual approach (create json file in the root, create proprieties etc)
//npm init (step by step, press enter to skip)
//npm init -y 

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)