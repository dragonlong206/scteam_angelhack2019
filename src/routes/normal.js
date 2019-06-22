/*
 * @Author: Haz
 * @Date: 2019-05-23 10:56:55
 * @Last Modified by: Haz
 * @Last Modified time: 2019-05-30 10:43:58
 */

import { createStackNavigator } from 'react-navigation';
import { ROOT, PAGE } from './type';
import tabNavigationBottom from './main';
import Page from '../views/home/screen';

const StacksOverTabs = {
  [PAGE]: {
    screen: Page
  }
};

export default createStackNavigator({
  [ROOT]: {
    screen: tabNavigationBottom,
    path: ''
  },
  ...StacksOverTabs
});
