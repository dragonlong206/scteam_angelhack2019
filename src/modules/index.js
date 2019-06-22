import SQLite from 'react-native-sqlite-storage';

const openCB = () => {
  console.log('Database OPENED');
};

const errorCB = err => {
  console.log('SQL Error: ' + err);
};

export default SQLite.openDatabase(
  'splitbill.db',
  '1.0',
  'Test Database',
  200000,
  openCB,
  errorCB
);
