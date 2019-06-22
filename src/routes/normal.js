/*
 * @Author: Haz
 * @Date: 2019-05-23 10:56:55
 * @Last Modified by: Haz
 * @Last Modified time: 2019-05-30 10:43:58
 */

import { createStackNavigator } from 'react-navigation';
import { ROOT, DETAIL } from './type';
import tabNavigationBottom from './main';

import DetailScreen from "../views/home/detail";

const StacksOverTabs = {
  [DETAIL]: {
    screen: DetailScreen
  }
};

export default createStackNavigator({
  [ROOT]: {
    screen: tabNavigationBottom,
    path: ''
  },
  ...StacksOverTabs
});
