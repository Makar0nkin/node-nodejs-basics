import fs from 'fs';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// list.js - implement function that prints all array of filenames from 'files' folder into console 
// if 'files' folder doesn't exists Error with message 'FS operation failed' must be thrown

const list = async () => {
    const innerDir = 'files'
    fs.promises.readdir(path.join(__dirname, innerDir))
        .then((fns) => fns.forEach(el => console.log(el)))
        .catch(() => {throw Error('FS operation failed')})
};

await list();