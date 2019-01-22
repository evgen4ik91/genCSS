const program = require('commander');
const prompt = require('prompt-sync')();

program
  .version('0.1.0')
  .option('-p, --filepath [value]', 'Type path')
  .option('-n, --filename [value]', 'Type name')
  .parse(process.argv);

let filepath = program.filepath ? program.filepath : prompt('Path is required. Type the filepath: ');

console.log(`${filepath} - filepath`);
if (program.filename) console.log(`${program.filename} - filename`);