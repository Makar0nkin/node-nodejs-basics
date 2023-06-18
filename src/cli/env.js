const parseEnv = () => {
    const envPrefix = 'RSS_'
    let envVars = Object.keys(process.env).filter(el => el.startsWith(envPrefix))
    console.log(envVars.reduce((res, value) => res += `;${value}=${process.env[value]}`, '').substring(1));
};

parseEnv();