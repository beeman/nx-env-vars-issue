console.log('Hello World!');

if (!process.env.TEST_ENV_VAR) {
  throw new Error(`TEST_ENV_VAR not set`);
}
