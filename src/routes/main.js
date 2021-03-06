/*
 * @Author: Haz
 * @Date: 2019-05-23 10:51:29
 * @Last Modified by: Haz
 * @Last Modified time: 2019-06-23 09:39:17
 */
import React from 'react';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation';
import { View, TouchableOpacity, Text } from 'react-native';

import i18n from '../lang/index';
import HomeScreen from '../views/home';
import ProfileScreen from '../views/profile';
import ActivityScreen from '../views/activity';
import GroupScreen from '../views/group';
import AddEverything from '../components/addEverything';
import themeStyle from '../styles/index';

import { HOME, PROFILE, ADDEVERYTHING, GROUP, OPTIONS, ACTIVITY } from './type';
import {
  heightFotter,
  primaryColor,
  secondary1Color,
  fontSizeHeadline,
  colorGreen,
  colorWhite,
  fontSizeIcon,
  fontSizeCaption
} from '../styles/_variables';
import TabHeader from '../components/tabHeader';

const tabNavigationBottom = createBottomTabNavigator(
  {
    [HOME]: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarIcon: ({ tintColor }) => (
            <Icon
              type="font-awesome"
              size={fontSizeIcon}
              name="home"
              color={tintColor}
            />
          ),
          tabBarLabel: i18n.t('overview')
        };
      }
    },
    [ACTIVITY]: {
      screen: ActivityScreen,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarIcon: ({ tintColor }) => (
            <Icon
              size={fontSizeIcon}
              type="font-awesome"
              name="bar-chart"
              color={tintColor}
            />
          ),
          tabBarLabel: i18n.t('activities')
        };
      }
    },
    [ADDEVERYTHING]: {
      screen: AddEverything,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: ' ',
          tabBarIcon: ({ tintColor }) => (
            <View
              style={[
                themeStyle.ButtonAddButtomNavigation,
                themeStyle.BoxShadow,
                {
                  backgroundColor:
                    tintColor === primaryColor ? primaryColor : colorGreen
                }
              ]}
            >
              <Icon size={fontSizeIcon} name="add" color={colorWhite} />
            </View>
          )
        };
      }
    },
    [GROUP]: {
      screen: GroupScreen,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarIcon: ({ tintColor }) => (
            <Icon
              size={fontSizeIcon}
              type="font-awesome"
              name="group"
              color={tintColor}
            />
          ),
          tabBarLabel: i18n.t('group')
        };
      }
    },
    [OPTIONS]: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarIcon: ({ tintColor }) => (
            <Icon
              size={fontSizeIcon}
              type="simple-line-icon"
              name="options"
              color={tintColor}
            />
          ),
          tabBarLabel: i18n.t('option')
        };
      }
    }
  },
  {
    initialRouteName: HOME,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      showIcon: true,
      activeTintColor: primaryColor,
      inactiveTintColor: secondary1Color,
      style: themeStyle.bottomNavigation,
      tabStyle: {
        height: heightFotter
      },
      labelStyle: {
        fontSize: fontSizeCaption
      }
    }
  }
);

tabNavigationBottom.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let title;
  switch (routeName) {
    case OPTIONS:
      title = 'Cá nhân';
      break;
    case ACTIVITY:
      title = 'Hoạt động';
      break;
    case GROUP:
      title = i18n.t('group');
      break;
    case ADDEVERYTHING:
      title = <TabHeader />;
      break;
    default:
      title = 'Tổng quan';
      break;
  }
  return {
    headerTitle: title,
    headerStyle: {}
  };
};

export default tabNavigationBottom;
