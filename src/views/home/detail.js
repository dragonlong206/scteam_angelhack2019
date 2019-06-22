import React, { PureComponent } from 'react';
import { List, ListItem, Icon } from 'react-native-elements';
import { FlatList, Text, View } from 'react-native';
import { ItemSeparator } from '../../components/itemSeparator';
import activityDetails from '../../../data/activity_details.json';
import _ from 'lodash';
import {
  colorGray,
  fontSizeCaption,
  fontSizeNote,
  fontSizeIcon
} from '../../styles/_variables';

export default class Detail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: activityDetails
    };
  }

  renderUser = (users, date) => {
    let userList = _.join(users.map(u => u.user.name), ', ');
    return (
      <View>
          <Text style={{ color: colorGray, marginTop: 3, fontSize: fontSizeNote }}>{userList}</Text>
          <Text style={{ color: colorGray, marginTop: 3, fontSize: fontSizeNote }}>{date}</Text>
      </View>
    );
  };

  renderRightElement = amount => {
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
        <View>
          <Text>{amount}VND</Text>
        </View>
        <View>
          <Icon
            name='navigate-next'
            type= 'material-icon'
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <ItemSeparator />}
        renderItem={({ item }) => (
          <ListItem
            title={item.description}
            subtitle={this.renderUser(item.expenseSharing, item.date)}
            subtitleStyle={{
              color: colorGray,
              marginTop: 3,
              fontSize: fontSizeNote
            }}
            rightElement={this.renderRightElement(item.amount)}
          />
        )}
      />
    );
  }
}
