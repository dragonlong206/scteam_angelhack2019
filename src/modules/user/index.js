import { setDataToStorage, getDataToStorage } from '../../utils/storage';
import { USER } from '../../utils/constants';

export const insertUser = info => {
  return setDataToStorage(USER, info);
};

export const getUser = () => {
  return getDataToStorage(USER);
};
