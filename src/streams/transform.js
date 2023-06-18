const transform = async () => {
  const stdin = process.stdin
  stdin.setEncoding('utf8')
  const stdout = process.stdout
  stdin.on("data", (chunk) => {
    stdout.write(chunk.split('').reverse().join('').replace('\n', '') + '\n')
  })
};

await transform();