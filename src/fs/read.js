import fs from 'fs';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const srcPath = 'files'
    const fileToRead = 'fileToRead.txt'
    fs.promises.readFile(path.join(__dirname, srcPath, fileToRead), {encoding: 'utf-8'})
        .then(console.log)
        .catch(() => {throw Error('FS operation failed')})
};

await read();