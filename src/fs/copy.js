import fs from 'fs';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const srcPath = 'files'
    const destinyPath = 'files_copy'

    fs.promises.mkdir(path.join(__dirname, 'files_copy'))
        .catch(err => {throw Error('FS operation failed')})
    
    fs.readdir(path.join(__dirname, srcPath), (err, files) => {
        Promise.all(files.map((fn) => {
            fs.promises.copyFile(
                path.join(__dirname, srcPath, fn), 
                path.join(__dirname, destinyPath, fn)
            ).catch(err => {throw err})
        }))
    })
};

await copy();
