import AsyncStorage from '@react-native-community/async-storage';
import { STORAGE_SIZE, STORAGE_EXPIRES } from './constants';

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

export const getDataToStorage = key => {
  try {
    return storage.load({
      key
    });
  } catch (error) {
    return undefined;
  }
};

export const setDataToStorage = (key, data) =>
  storage.save({
    key,
    data,
    autoSync: true,
    syncInBackground: true
  });

export const deleteDataToStorage = key =>
  storage.remove({
    key,
    autoSync: true,
    syncInBackground: true
  });
