import { parentPort } from "worker_threads"

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    parentPort.on('message', ({n}) => {
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