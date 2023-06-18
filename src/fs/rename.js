import fs from 'fs';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const innerDir = 'files'
    const oldFn = 'wrongFilename.txt'
    const newFn = 'properFilename.md'

    fs.promises.rename(path.join(__dirname, innerDir, oldFn), path.join(__dirname, innerDir, newFn))
        .catch(() => {throw Error('FS operation failed')})
};

await rename();