import { ExpoConfig, ConfigContext } from '@expo/config';
import _ from 'lodash';

const CONFIG = require('./app.json')

export default ({ config }: ConfigContext): ExpoConfig => {
  const _config: ExpoConfig = { ...CONFIG.expo };

  const PROFILE = process.env.PROFILE || 'development';
  const isDevClient = process.env.DEV_CLIENT === 'true';

  if (isDevClient) {
    _config.name = 'Pixy Dev';
    _config.ios!.bundleIdentifier = `com.devmood.pixymoodtracker.dev`
    _config.android!.package = `com.devmood.pixymoodtracker.dev`
    _config.android!.icon = _config.icon = './assets/images/icon-dev.png';
  }

  // console.log('------------------------------');
  // console.log('Profile:', PROFILE);
  // console.log('Building with config:');
  // console.log(JSON.stringify(_config, null, 2));
  // console.log('------------------------------');

  return _config;
};