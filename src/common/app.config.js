const dev = {
    host: 'https://www.easy-mock.com/mock/5b2b1707fa24d110ebb2dbdc',
    api: '',
  };
  const prod = {
    host: 'http://localhost:2000',
    api: '',
  };
  
  let config;
  if (process.env.NODE_ENV == 'development') {
    config = dev;
  } else if (process.env.NODE_ENV == 'production') {
    config = prod;
  }
  export default config;