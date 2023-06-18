import fs from 'fs';
import url from 'url';
import path from 'path';
import zlib from 'zlib';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const fileToDecompress = path.join(__dirname, 'files', 'archive.gz')
  const pathToFile = path.join(__dirname, 'files', 'FileToCompress.txt')
  const readableStream = fs.createReadStream(fileToDecompress)
  const writableStream = fs.createWriteStream(pathToFile, 'utf-8')
  readableStream.on('data', (zippedBuff) => {
    zlib.gunzip(zippedBuff, (err, buffer) => {
      writableStream.write(buffer)
    })
  })
}

await decompress();