/*
 * @Author: Haz
 * @Date: 2019-05-23 13:27:19
 * @Last Modified by: Haz
 * @Last Modified time: 2019-05-23 13:28:24
 */
import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';

export default class Modal extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Modal </Text>
      </View>
    );
  }
}
