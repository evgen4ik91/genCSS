'use strict';

const fs = require('fs');
const program = require('commander');
const prompt = require('prompt-sync')();

const times = 1000000;
const scriptFileName = __filename.split(/[\\/]/).pop();

program
  .version('0.1.0')
  .option('-p, --filepath [value]', 'Type path')
  .option('-n, --filename [value]', 'Type name')
  .parse(process.argv);


let loading = {
    frames: ['.', '..', '...'],
    interval: null,
    start() {
        let i = 0;
        let framesLength = this.frames.length - 1;
        this.interval = setInterval(() => {
            i = (i > framesLength) ? 0 : i;
            console.clear();
            console.log(this.frames[i]);
            i++;
        }, 300);
    },
    stop() {
        clearInterval(this.interval);
        console.clear();
    }
};

let filepath = program.filepath ? program.filepath : prompt('Path is required. Type the filepath: ');
let filename = program.filename ? program.filename + '.css' : 'style.css';


loading.start();
let file = fs.createWriteStream(filepath + filename);

file.on('finish', () => { 
    loading.stop();
    console.log('Finished!');
});
file.on('error', () => {
    loading.stop();
    console.log('err');
});

for (let i = 1; i <= times; i++) file.write(`.class${i} {background: 'red'};${ i === times ? '' : '\n'}`);
file.end();