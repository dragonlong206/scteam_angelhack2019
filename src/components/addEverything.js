import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import AddActivityDetail from "../views/expense/addActivityDetail";

export default class AddEverything extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <AddActivityDetail />
      </View>
    );
  }
}
