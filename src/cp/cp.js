import url from 'url'
import path from 'path'
import { spawn } from 'child_process'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const spawnChildProcess = async (args) => {
    const cp = spawn('node', [path.join(__dirname, 'files', 'script.js'), ...args], {stdio: 'pipe'})
    process.stdin.pipe(cp.stdin)

    cp.stdout.on("data", (data) => {
        process.stdout.write(data.toString())
    })
};

spawnChildProcess( ['arg1', 'arg2', '3']);
