const {load} = require('csv-load-sync');
const csv = load('coin_Bitcoin.csv');
const csv2 = load('coin_Dogecoin.csv');
const csv3 = load('coin_Ethereum.csv')

console.log(csv)
console.log(csv2)
console.log(csv3)


