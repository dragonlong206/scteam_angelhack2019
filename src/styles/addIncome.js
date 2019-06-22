import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  splitWrapper: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center"
  },
  splitLabel: {
    flex: 1,
    justifyContent: 'flex-start'
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
    marginRight: 10,
  }
});
