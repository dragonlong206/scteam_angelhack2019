export const getDataToStorage = key => {
  try {
    return global.storage.load({
      key
    });
  } catch (error) {
    return undefined;
  }
};

export const setDataToStorage = (key, data) =>
  global.storage.save({
    key,
    data,
    autoSync: true,
    syncInBackground: true
  });

export const deleteDataToStorage = key =>
  global.storage.remove({
    key,
    autoSync: true,
    syncInBackground: true
  });
