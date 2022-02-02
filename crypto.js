const csv = require('csv-parser');
const fs = require('fs');

let a = []
fs.createReadStream('coin_Bitcoin.csv')
  .pipe(csv())
  .on('data', (row) => {
    a.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });


