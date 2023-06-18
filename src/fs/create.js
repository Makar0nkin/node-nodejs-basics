import fs from 'fs';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const filePath = path.join(__dirname, 'files', 'fresh.txt')
    const data = 'I am fresh and young'
    fs.access(filePath, (err) => {
        if (err) fs.promises.writeFile(filePath, data)
        else throw Error('FS operation failed')
    })
};

await create();