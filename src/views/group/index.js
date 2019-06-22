import React, { PureComponent } from 'react';
import { List, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native';
import { ItemSeparator } from '../../components/itemSeparator';
import groups from '../../../data/groups.json';
import _ from 'lodash';
import {
  colorGray,
  fontSizeCaption,
  fontSizeNote
} from '../../styles/_variables';

export default class Group extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: groups
    };
  }

  renderDescription = users => {
    return _.join(users.map(u => u.name), ', ');
  };

  render() {
    return (
      <FlatList
        data={this.state.data}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <ItemSeparator />}
        renderItem={({ item }) => (
          <ListItem
            leftAvatar={{
              rounded: true,
              containerStyle: { margin: 5 },
              onPress: () => alert('hey'),
              source: { uri: item.icon },
              size: 'medium'
            }}
            title={item.name}
            subtitle={this.renderDescription(item.members)}
            subtitleStyle={{
              color: colorGray,
              marginTop: 3,
              fontSize: fontSizeNote
            }}
            rightIcon={{ name: 'navigate-next', type: 'material-icon' }}
          />
        )}
      />
    );
  }
}
