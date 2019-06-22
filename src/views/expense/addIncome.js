import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { Input, Icon } from "react-native-elements";
import i18n from "../../lang/index";

export default class AddIncome extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Input placeholder={i18n.t('money_placeholder')}  label={i18n.t('money_label')}/>
      </View>
    );
  }
}
