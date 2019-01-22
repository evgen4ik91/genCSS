const program = require('commander');

program
  .version('0.1.0')
  .option('-p, --filepath [value]', 'Type path')
  .option('-n, --filename [value]', 'Type name')
  .parse(process.argv);

console.log('run');
if (program.filepath) console.log(`${program.filepath} - filepath`);
if (program.filename) console.log(`${program.filename} - filename`);