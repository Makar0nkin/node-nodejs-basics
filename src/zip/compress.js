import fs from 'fs';
import url from 'url';
import path from 'path';
import zlib from 'zlib';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compress = async () => {
  const fileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt')
  const pathToArchive = path.join(__dirname, 'files', 'archive.gz')
  const readableStream = fs.createReadStream(fileToCompress, 'utf-8')
  const writableStream = fs.createWriteStream(pathToArchive, 'utf-8')
  readableStream.on('data', (chunk) => {
    zlib.gzip(chunk, (err, buff) => {
      writableStream.write(buff)
    })
  })
};

await compress();