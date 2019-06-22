import React, { PureComponent } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import activityDetail from '../../../data/activity_details.json';
import { ButtonGroup, ListItem, Icon, Avatar } from 'react-native-elements';
import {
  fontSizeCaption,
  fontSizeIcon,
  fontSizeSummaryMoneyBalance,
  colorRed,
  colorGreen,
  colorGray
} from '../../styles/_variables.js';
import { ItemSeparator } from '../../components/itemSeparator.js';
import numeral from 'numeral';

const styles = StyleSheet.create({
  info: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10
  },
  itemLeft: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemRight: {
    flex: 5
  }
});
export default class ActivityDetail extends PureComponent {
  constructor(props) {
    super(props);

    let detail = activityDetail.filter(
      v =>
        v.activityId.toString() === props.navigation.state.params.id.toString()
    );

    this.state = {
      detail,
      selectedIndex: 0,
      tabDetail: this.personJoins,
      name: props.navigation.state.params.title,
      avatar: props.navigation.state.params.avatar
    };
  }

  updateIndex = selectedIndex => {
    this.setState(state => {
      let index = selectedIndex + 1;
      return {
        selectedIndex,
        tabDetail:
          index === 1
            ? this.personJoins
            : index === 2
            ? this.tcs
            : this.sponsors
      };
    });
  };

  sponsors = [
    {
      id: 1,
      name: 'Bợm 3',
      avatar: 'https://i.pravatar.cc/100?img=1',
      amount: '35000000',
      des: 'Nay mình trúng số nên cho bớt'
    },
    {
      id: 2,
      name: 'Ronaldo',
      avatar: 'https://i.pravatar.cc/100?img=2',
      amount: '55000000',
      des: 'Mới ký hợp đồng với Juvetus nên tặng cho mọi người'
    },
    {
      id: 3,
      name: 'Alibaba',
      avatar: 'https://i.pravatar.cc/100?img=3',
      amount: '105000000',
      des: 'Mới trúng được lô đất :)'
    }
  ];

  tcs = [
    {
      id: '1',
      name: 'Tiền internet',
      des: 'Bạn với Tí, Tèo',
      amount: 3500000,
      date: 'Hôm qua'
    },
    {
      id: '2',
      name: 'Tiền chợ',
      des: 'Bạn với Ronaldo, Messi',
      amount: 1500000,
      date: 'Hôm qua'
    },
    {
      id: '3',
      name: 'Tiền mua vui',
      des: 'Bạn với Ronaldo, Messi',
      amount: 5500000,
      date: 'Hôm kia'
    }
  ];

  personJoins = [
    {
      id: 7,
      name: 'Bợm 3',
      avatar: 'https://i.pravatar.cc/100?img=7',
      amount: '35000000',
      type: 'Bị nợ'
    },
    {
      id: 8,
      name: 'Thằng Tèo',
      avatar: 'https://i.pravatar.cc/100?img=8',
      amount: '25000000',
      type: 'Bị nợ'
    },
    {
      id: 9,
      name: 'Thằng Tí',
      avatar: 'https://i.pravatar.cc/100?img=9',
      amount: '15000000',
      type: 'Nợ'
    }
  ];

  getTabDetail = item => {
    const { selectedIndex } = this.state;

    let rs = (
      <ListItem
        leftAvatar={{
          rounded: true,
          containerStyle: { margin: 5 },
          onPress: () => alert('hey'),
          source: { uri: item.avatar },
          size: 'medium'
        }}
        title={item.name}
        rightElement={() => (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: fontSizeCaption,
                  marginBottom: 5
                }}
              >
                {item.type}
              </Text>
              <Text
                style={{
                  fontSize: fontSizeSummaryMoneyBalance,
                  color: item.type === 'Nợ' ? colorRed : colorGreen
                }}
              >
                {numeral(item.amount).format('0.0a')}
              </Text>
            </View>
            <View>
              <Icon
                name="navigate-next"
                type="material-icon"
                size={fontSizeIcon}
              />
            </View>
          </View>
        )}
      />
    );
    switch (selectedIndex) {
      case 1:
        rs = (
          <ListItem
            leftElement={() => (
              <View>
                <Text style={{ fontSize: fontSizeSummaryMoneyBalance }}>
                  {item.name}
                </Text>
                <Text>{item.des}</Text>
                <Text
                  style={{ fontSize: fontSizeCaption, fontStyle: 'italic' }}
                >
                  {item.date}
                </Text>
              </View>
            )}
            rightElement={() => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: fontSizeSummaryMoneyBalance,
                      color: colorRed
                    }}
                  >
                    {numeral(item.amount).format('0.0a')}
                  </Text>
                </View>
                <View>
                  <Icon
                    name="navigate-next"
                    type="material-icon"
                    size={fontSizeIcon}
                  />
                </View>
              </View>
            )}
          />
        );
        break;
      case 2:
        rs = (
          <ListItem
            leftAvatar={{
              rounded: true,
              containerStyle: { margin: 5 },
              onPress: () => alert('hey'),
              source: { uri: item.avatar },
              size: 'medium'
            }}
            title={item.name}
            subtitle={item.des}
            subtitleStyle={{ fontSize: fontSizeCaption, color: colorGray }}
            rightElement={() => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: fontSizeSummaryMoneyBalance,
                      color: colorGreen
                    }}
                  >
                    {numeral(item.amount).format('0.0a')}
                  </Text>
                </View>
                <View>
                  <Icon
                    name="navigate-next"
                    type="material-icon"
                    size={fontSizeIcon}
                  />
                </View>
              </View>
            )}
          />
        );
        break;
    }
    return rs;
  };

  render() {
    const { detail, selectedIndex, avatar } = this.state;

    return (
      <View>
        <View>
          <View style={styles.info}>
            <View style={styles.itemLeft}>
              <Avatar size="large" rounded source={{ uri: avatar }} />
            </View>
            <View style={styles.itemRight}>
              <Text style={{ fontSize: 20 }}>{this.state.name}</Text>
              <Text>Lặp lại hàng tháng</Text>
            </View>
          </View>
        </View>
        <View>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={['Người tham gia', 'Thu chi', 'Tài trợ']}
            containerStyle={{ height: 30 }}
            textStyle={{ fontSize: fontSizeCaption }}
          />
          <FlatList
            data={this.state.tabDetail}
            keyExtractor={item => item.id.toString()}
            extraData={JSON.stringify(this.state.tabDetail)}
            ItemSeparatorComponent={() => <ItemSeparator />}
            renderItem={({ item }) => this.getTabDetail(item)}
          />
        </View>
      </View>
    );
  }
}
