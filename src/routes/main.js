/*
 * @Author: Haz
 * @Date: 2019-05-23 10:51:29
 * @Last Modified by: Haz
 * @Last Modified time: 2019-05-30 10:40:54
 */

import { createBottomTabNavigator } from "react-navigation";
import { Animated, Easing, View, Image } from "react-native";
import { Icon } from "react-native-elements";

import HomeScreen from "../views/home";
import ProfileScreen from "../views/profile";
import AddEverything from "../components/addEverything";
import themeStyle from "../styles/index";

import { HOME, PROFILE, ADDEVERYTHING } from "./type";
import {
  heightFotter,
  secondary2Color,
  primaryColor,
  secondary1Color,
  colorWhite,
  fontSizeHeadline,
  colorBlue,
  colorGreen,
  colorBlack,
  backgroundScreen
} from "../styles/_variables";

const tabNavigationBottom = createBottomTabNavigator(
  {
    [HOME]: {
      screen: HomeScreen
    },
    [PROFILE]: {
      screen: ProfileScreen,
      path: "profile"
    },
    [ADDEVERYTHING]: {
      screen: AddEverything,
      //path: "AddEverything",
      navigationOptions: ({ navigation }) => {
        return {
          // tabBarIcon: ({ tintColor }) => (
          //   <View
          //     style={[
          //       themeStyle.ButtonAddButtomNavigation,
          //       themeStyle.BoxShadow,
          //       {
          //         backgroundColor:
          //           tintColor === primaryColor ? primaryColor : colorGreen
          //       }
          //     ]}
          //   >
          //     <View>
               
          //     </View>
          //   </View>
          // ),
          tabBarLabel: "Add"
        };
      }
    }
  },
  {
    initialRouteName: HOME,
    tabBarPosition: "bottom",
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
        fontSize: fontSizeHeadline
      }
    }
  }
);

tabNavigationBottom.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let title;
  switch (routeName) {
    case PROFILE:
      title = "Profile";
      break;
    case ADDEVERYTHING:
      title = "Add";
      break;
    default:
      title = "Home";
      break;
  }
  return {
    headerTitle: title,
    headerStyle: {}
  };
};

export default tabNavigationBottom;
