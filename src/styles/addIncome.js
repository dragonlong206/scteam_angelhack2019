import { StyleSheet } from "react-native";
export default StyleSheet.create({
  splitWrapper: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center"
  },
  splitLabel: {
    flex: 1,
    justifyContent: "flex-start"
  },
  splitIncomeUserItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  splitIncomeUserWrapper: {
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10
  },
  checkBoxSplitContainer: {
    marginTop: 5,
    marginBottom: 5,
    padding: 0
  },
  buttonActionWrapper: {
    marginLeft: 10,
    marginRight: 10
  },
  modelView: {
    backgroundColor: "white",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "stretch",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  buttonCloseModel: {
    backgroundColor: "lightblue",
    padding: 10,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  customeTypeWrapper: {
    flexDirection: "column",
    flex:0.7
  },
  customeTypeItem: {
    flexDirection: "row",
    //justifyContent: "space-between",
    //alignItems: "stretch"
  }
});
