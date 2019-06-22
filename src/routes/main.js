/*
 * @Author: Haz
 * @Date: 2019-05-23 10:51:29
 * @Last Modified by: Haz
 * @Last Modified time: 2019-05-30 10:40:54
 */

import { createBottomTabNavigator } from 'react-navigation';

import { HOME, PROFILE } from './type';

import HomeScreen from '../views/home';
import ProfileScreen from '../views/profile';

const tabNavigationBottom = createBottomTabNavigator(
  {
    [HOME]: {
      screen: HomeScreen
    },
    [PROFILE]: {
      screen: ProfileScreen,
      path: 'profile'
    }
  },
  {
    initialRouteName: HOME,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      showIcon: true,
      activeTintColor: 'red',
      labelStyle: {},
      style: {}
    }
  }
);

tabNavigationBottom.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let title;
  switch (routeName) {
    case PROFILE:
      title = 'Profile';
      break;
    default:
      title = 'Home';
      break;
  }
  return {
    headerTitle: title,
    headerStyle: {}
  };
};

export default tabNavigationBottom;
