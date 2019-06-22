/**
 * @format
 */

import { AppRegistry } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Storage from 'react-native-storage';
import App from './App';
import { name as appName } from './app.json';

import { STORAGE_SIZE, STORAGE_EXPIRES } from './src/utils/constants';

const storage = new Storage({
  // maximum capacity, default 1000
  size: STORAGE_SIZE,

  // Use AsyncStorage for RN apps, or window.localStorage for web apps.
  // If storageBackend is not set, data will be lost after reload.
  storageBackend: AsyncStorage,

  // can be null, which means never expire.
  defaultExpires: STORAGE_EXPIRES,

  // cache data in the memory. default is true.
  enableCache: true,

  // if data was not found in storage or expired data was found,
  // the corresponding sync method will be invoked returning
  // the latest data.
  sync: {
    // we'll talk about the details later.
  }
});

global.storage = storage;

AppRegistry.registerComponent(appName, () => App);
