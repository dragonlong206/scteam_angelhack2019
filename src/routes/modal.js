/*
 * @Author: Haz
 * @Date: 2019-05-23 11:01:27
 * @Last Modified by: Haz
 * @Last Modified time: 2019-06-23 01:53:30
 */
import { createStackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';

import { ROOT, MODAL } from './type';
import StacksOverTabs from './normal';
import Page from '../views/home/screen';

const modalPage = {
  [MODAL]: {
    screen: Page,
    path: 'page'
  }
};

export default createStackNavigator(
  {
    [ROOT]: {
      screen: StacksOverTabs,
      path: ''
    },
    ...modalPage
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 400,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0]
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1]
        });

        return { opacity, transform: [{ translateY }] };
      }
    })
  }
);
