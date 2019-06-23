/*
 * @Author: Haz
 * @Date: 2019-05-23 10:56:55
 * @Last Modified by: Haz
 * @Last Modified time: 2019-06-23 01:58:54
 */

import { createStackNavigator } from 'react-navigation';
import { ROOT, DETAIL, ACTIVITY_DETAIL } from './type';
import tabNavigationBottom from './main';

import DetailScreen from '../views/home/detail';
import ActivityDetail from '../views/activity/detail';

const stackNavigationOptions = {
  headerBackTitle: null
};

const StacksOverTabs = {
  [DETAIL]: {
    screen: DetailScreen,
    navigationOptions: ({ navigation }) => {
      return { ...stackNavigationOptions, headerTitle: 'Lịch sử thu chi' };
    }
  },
  [ACTIVITY_DETAIL]: {
    screen: ActivityDetail,
    navigationOptions: ({ navigation }) => {
      return {
        ...stackNavigationOptions,
        headerTitle: navigation.state.params.title
      };
    }
  }
};

export default createStackNavigator({
  [ROOT]: {
    screen: tabNavigationBottom,
    path: ''
  },
  ...StacksOverTabs
});
