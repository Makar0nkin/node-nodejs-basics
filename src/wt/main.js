import url from 'url';
import path from 'path';
import os from 'os'
import { Worker } from "worker_threads"

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    let workers = []
    for (let i = 0; i < os.cpus().length; i++) {
        workers.push(new Promise((resolve, reject) => {
            let worker = new Worker(path.join(__dirname, 'worker.js'))
            worker.postMessage({ n: i + 10 })
            worker.on('message', ({status, data}, err) => {
                if (!err) resolve({status, data})
                else reject(err)
                worker.terminate()
            })
        }))
    }
    Promise.allSettled(workers).then(results => {
        console.log(results.map(({status, value}) => value))
    })
};

await performCalculations();