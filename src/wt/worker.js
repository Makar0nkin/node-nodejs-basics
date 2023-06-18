import { parentPort } from "worker_threads"

// worker.js - extend given function to work with data received from main thread and
// implement function which sends result of the computation to the main thread
// n should be received from main thread

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    parentPort.on('message', ({n}) => {
        // parentPort.postMessage(nthFibonacci(n))
        let data;
        try {
            data = nthFibonacci(n)
            parentPort.postMessage({
                status: 'resolved', 
                data: data 
            })
        } catch (error) {
            parentPort.postMessage({
                status: 'error', 
                data: null 
            })
        }
    })
};

sendResult();