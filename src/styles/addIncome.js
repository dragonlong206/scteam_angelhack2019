import { StyleSheet } from "react-native";
export default StyleSheet.create({
  splitWrapper: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  splitLabel: {
    flex: 1,
    justifyContent: "flex-start"
  },
  splitIncomeUserItem:{
    flexDirection: "row",
  },
  splitIncomeUserWrapper:{
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
  }
});
