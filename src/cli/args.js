const parseArgs = () => {
  const transposeArr = (arr) => arr[0].map((col, i) => arr.map(row => row[i]))
  let argv = process.argv.slice(2)
  let cliVars = Object.fromEntries(transposeArr([
    argv.filter((v, i) => i % 2 === 0),
    argv.filter((v, i) => i % 2 === 1)
  ]))
  let output = ''
  for (const [key, value] of Object.entries(cliVars)){
    output += `, ${key.replace('--', '')} is ${value}`
  }
  console.log(output.substring(2));
};

parseArgs();

