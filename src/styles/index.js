import { StyleSheet } from 'react-native'
import {
  colorWhite,
  fontSizeTitle,
  colorBlue,
  heightFotter,
  colorBlack,
  colorWhite100,
  primaryColor,
  colorGreen
} from './_variables'

export default StyleSheet.create({
  HeaderIcon: {width: 36, height: 36},
  IconTreasurer: {
    backgroundColor: colorGreen,
    shadowColor: colorBlack,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    //elevation: 7,
    padding: 4,
    width: 15,
    height: 15,
    borderRadius: 26 / 2,
    position: "absolute",
    bottom: -5,
    right: -5,
    alignItems: "center",
    justifyContent: "center"
  },
  HeaderTitleContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  HeaderTitle: {
    color: colorBlack,
    fontSize: fontSizeTitle,
    //marginLeft: 10,
  },
  Header: {
    backgroundColor: colorWhite,
    borderBottomWidth: 0,
    shadowColor: colorBlack,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.09,
    shadowRadius: 2,

    elevation: 2
  },
  ButtonAddButtomNavigation: {
    backgroundColor: colorBlue,
    position: 'absolute',
    width: heightFotter,
    height: heightFotter,
    borderRadius: heightFotter / 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0
  },
  BoxShadow: {
    shadowColor: colorBlack,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  },
  bottomNavigation:{
    backgroundColor: colorWhite,
    height: heightFotter,
    borderTopWidth: 0,
    shadowColor: colorBlack,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.09,
    shadowRadius: 2,
    elevation: 2
  },
  headerButton :{
    marginLeft: 5,
    marginRight: 5,
  },
  headerBackButton:{
    fontSize: 17
  }
})
