const fs = require('fs');
const Chance = require('chance');

const chance = new Chance();

const file = fs.createWriteStream('file-stream.txt');

function generateData() {
  while (chance.bool({ likelihood: 95 })) {
    const isOver = file.write(chance.string({ length: 16 * 1024 }));
    if (!isOver) {
      console.log('Drain!');
      return file.once('drain', generateData);
    }
  }
  file.end(() => {
    console.log('Data text saved!');
  });
}

generateData();
