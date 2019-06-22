import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { PAGE, MODAL } from '../../routes/type';

export default class Home extends PureComponent {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(PAGE)}>
          <Text>Page</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(MODAL)}>
          <Text>Modal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
