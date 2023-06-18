import { createHmac } from 'crypto'
import fs from "fs";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const srcPath = 'files'
  const fileToRead = 'fileToCalculateHashFor.txt'
  const secret = 'nikita'
  let data = await fs.promises.readFile(path.join(__dirname, srcPath, fileToRead), {encoding: 'utf-8'})
  const hash = createHmac('sha256', secret)
    .update(data)
    .digest('hex')
  console.log(hash);
};

await calculateHash();