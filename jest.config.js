//config do jest como o mesmo ira encontrar os aquivos na aplicações para realizar os testes
module.exports = {
  bail: true,
  coverageProvider: "v8",

  testMach: [
    "<rootDir>/src/**/*.spec.js"
  ]
};
