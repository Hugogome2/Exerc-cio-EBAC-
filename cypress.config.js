const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'b2p6ev',
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br"
  },
});
