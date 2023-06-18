import fs from 'fs';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const srcPath = 'files'
    const fileToDel = 'fileToRemove.txt'
    fs.promises.unlink(path.join(__dirname, srcPath, fileToDel))
        .catch(() => {throw Error("FS operation failed")})
};

await remove();