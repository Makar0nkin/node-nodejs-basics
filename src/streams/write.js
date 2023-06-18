import fs from 'fs';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const writableStream = fs.createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'), 'utf-8')
  const stdin = process.stdin
  stdin.setEncoding('utf8')
  stdin.pipe(writableStream)
};

await write();