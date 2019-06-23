import React, { PureComponent } from 'react';
import {
  View,
  TouchableOpacity,
  ListView,
  StyleSheet,
  FlatList,
  Image
} from 'react-native';
import { List, ListItem, Text } from 'react-native-elements';
import i18n from '../../lang/index';
import { Input, Icon } from 'react-native-elements';
import { DETAIL } from '../../routes/type';
import home from '../../../data/home.json';
import { ItemSeparator } from '../../components/itemSeparator';
import {
  colorGray,
  fontSizeCaption,
  fontSizeNote,
  fontSizeIcon,
  homeContainer,
  borderColor
} from '../../styles/_variables';
import style from '../../styles';
import numeral from 'numeral';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value1: numeral(home[0].amount).format('0a'),
      value2: numeral(home[1].amount).format('0a'),
      data: home
    };
  }

  renderRightElement = amount => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginTop: 10,
              marginBottom: 10,
              color: amount > 0 ? 'green' : 'red'
            }}
          >
            {numeral(amount).format('0a')}
          </Text>
        </View>
        <View>
          <Icon name="navigate-next" type="material-icon" />
        </View>
      </View>
    );
  };

  render() {
    const { value1, value2 } = this.state;
    return (
      <View>
        <View style={{ flexDirection: 'row', backgroundColor: borderColor }}>
          <View
            style={{
              alignItems: 'center',
              alignContent: 'center',
              fontWeight: 'bold',
              flex: 0.5,
              borderRightColor: '#333',
              borderRightWidth: 0.6666666
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>
              {i18n.t('debting_user')}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 10,
                marginBottom: 10,
                color: 'red'
              }}
            >
              {value1}
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              alignContent: 'center',
              fontWeight: 'bold',
              flex: 0.5
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>
              {i18n.t('debted_user')}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 10,
                marginBottom: 10,
                color: 'green'
              }}
            >
              {value2}
            </Text>
          </View>
        </View>
        <View>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => <ItemSeparator />}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate(DETAIL)}
                //style={homeContainer}
              >
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
