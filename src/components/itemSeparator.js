import React, { PureComponent } from 'react';
import { View } from 'react-native';

import { colorGray } from '../styles/_variables';

export class ItemSeparator extends PureComponent {
  render() {
    return (
      <View style={{ height: 1, width: '100%', backgroundColor: colorGray }} />
    );
  }
}
