import React, { PureComponent } from "react";
import { View, Text, ScrollView } from "react-native";
import { ButtonGroup } from "react-native-elements";
import AddExpense from "./addExpense";
import AddIncome from "./addIncome";
import AddSponsor from "./addSponsor";
import i18n from "../../lang/index";

const income = () => <Text>{i18n.t("income")}</Text>;
const expense = () => <Text>{i18n.t("expense")}</Text>;
const sponsor = () => <Text>{i18n.t("sponsor")}</Text>;

export default class AddActivityDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    const buttons = [
      { element: income },
      { element: expense },
      { element: sponsor }
    ];
    const { selectedIndex } = this.state;
    return (
      <View style={{ paddingBottom: 60 }}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 30 }}
        />
        <ScrollView>
          {selectedIndex == 0 ? (
            <AddIncome />
          ) : selectedIndex == 1 ? (
            <AddExpense />
          ) : (
            <AddSponsor />
          )}
        </ScrollView>
      </View>
    );
  }
}
