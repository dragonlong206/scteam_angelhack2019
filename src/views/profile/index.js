import React, { PureComponent } from 'react';
import { Text, View, FlatList } from 'react-native';

import { Avatar, ListItem, Icon } from 'react-native-elements';
import { fontSizeTitle, colorGray, colorWhite } from '../../styles/_variables';
import { ItemSeparator } from '../../components/itemSeparator';

const menus = [
  {
    id: 1,
    name: 'Quản lý thanh toán',
    icon: 'credit-card'
  },
  {
    id: 2,
    name: 'Lịch sử chi tiêu',
    icon: 'timeline'
  },
  {
    id: 3,
    name: 'Cài đặt',
    icon: 'settings'
  }
];

export default class Profile extends PureComponent {
  render() {
    return (
      <View style={{ backgroundColor: colorGray, flex: 1 }}>
        <View
          style={{
            padding: 10,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            borderBottomColor: colorGray,
            borderBottomWidth: 0.5,
            backgroundColor: colorWhite
          }}
        >
          <Avatar
            source={{ uri: 'https://i.pravatar.cc/300' }}
            showEditButton={true}
            size="large"
            rounded
          />
          <View
            style={{
              marginLeft: 10,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              flex: 1
            }}
          >
            <Text style={{ fontSize: fontSizeTitle }}>Haztares Nguyen</Text>
            <Icon type="antdesign" name="right" />
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
            marginBottom: 10,
            borderTopColor: colorGray,
            borderTopWidth: 1
          }}
        >
          <FlatList
            data={menus}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => <ItemSeparator />}
            renderItem={({ item }) => (
              <ListItem
                leftIcon={{ name: item.icon, type: 'material-icon' }}
                title={item.name}
                rightIcon={{ name: 'navigate-next', type: 'material-icon' }}
              />
            )}
          />
        </View>
      </View>
    );
  }
}
