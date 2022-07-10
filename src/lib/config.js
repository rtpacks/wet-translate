import config from '../../wet.config.json' assert {type: 'json'}

const {servicer, slat} = config;
const { appid, secret, api } = config[servicer];

export {
  config,
  servicer,
  slat,
  appid,
  secret,
  api
}