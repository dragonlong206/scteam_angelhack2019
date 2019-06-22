import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';

export default class ActivityDetail extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      detail: props.navigation.state.params.detail
    };
  }

  render() {
    const { detail } = this.state;
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
