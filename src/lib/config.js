const config = require('../../wet.config.json')

const {servicer, salt} = config;
const { appid, secret, api } = config[servicer];

module.exports = {
  config,
  servicer,
  salt,
  appid,
  secret,
  api
}