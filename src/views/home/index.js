import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, ListView, StyleSheet, FlatList, Image } from 'react-native';
import { List, ListItem } from "react-native-elements";
import i18n from "../../lang/index";
import { Input, Icon } from "react-native-elements";
import { DETAIL } from "../../routes/type";
import home from '../../../data/home.json';
import { ItemSeparator } from '../../components/itemSeparator';
import {
  colorGray,
  fontSizeCaption,
  fontSizeNote,
  fontSizeIcon,
  homeContainer
} from '../../styles/_variables';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
      value1: home[0].amount.toString() + 'VND',  
      value2: home[1].amount.toString() + 'VND',
      data: home
    };
  }

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
    const { value1, value2 } = this.state;
    return (
      <View style={homeContainer}>
        <View style={{ width: '50%', alignItems: 'center', fontWeight: 'bold' }}>
          <Input
            label={i18n.t("debting_user")}
            value={value1}
            editable={false}
          />
        </View>
        <View style={{ width: '50%', alignItems: 'center', fontWeight: 'bold' }}>
          <Input
            label={i18n.t("debted_user")}
            value={value2}
            editable={false}
          />
        </View>

        <View>
          <FlatList
              data={this.state.data}
              keyExtractor={item => item.id.toString()}
              ItemSeparatorComponent={() => <ItemSeparator />}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => this.props.navigation.navigate(DETAIL)} style={homeContainer}>
                  <ListItem
                    leftAvatar={{
                      rounded: true,
                      containerStyle: { margin: 5 },
                      onPress: () => alert('hey'),
                      source: { uri: item.avatar },
                      size: 'large'
                    }}
                    title={item.name}
                    subtitle={item.phoneNumber}
                    subtitleStyle={{
                      color: colorGray,
                      marginTop: 3,
                      fontSize: fontSizeNote
                    }}
                    rightElement={this.renderRightElement(item.amount)}
                  />
                </TouchableOpacity>
              )}
            />
        </View>
      </View>

    );
  }
}
