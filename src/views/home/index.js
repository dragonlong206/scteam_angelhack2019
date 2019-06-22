import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, ListView, StyleSheet, FlatList, Image } from 'react-native';
import { List, ListItem } from "react-native-elements";
import i18n from "../../lang/index";
import { Input, Icon } from "react-native-elements";
import {DETAIL} from "../../routes/type"

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
      value1: "350k",  
      value2: "750k",
      data: [
        {
          id: "1",
          username: "Minh Ngô",
          totalAmount: 250
        },
        {
          id: "2",
          username: "Thanh Bùi",
          totalAmount: 750
        },
        {
          id: "3",
          username: "Mỹ Nguyễn",
          totalAmount: -500
        }
      ]
    };
  }
  render() {
    const { value1, value2, data } = this.state;
    return (
      <View style={[styles.container]}>
        <View style={styles.item}>
          <Input
            label={i18n.t("debting_user")}
            // keyboardType="numeric"
            style={styles.item}
            value={value1}
            editable={false}
          />
        </View>
        <View style={styles.item}>
          <Input
            label={i18n.t("debted_user")}
            // keyboardType="numeric"
            style={styles.item}    
            value={value2}
            editable={false}
          />
        </View>

        <View>
          <FlatList
              data={this.state.data}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => this.props.navigation.navigate(DETAIL)} style={styles.container}>
                  <View style={[styles.avatar]}>
                    <Image source={{uri: 'https://png.pngtree.com/svg/20161206/06e260d19d.png'}} style={{width: 50, height: 50}} />
                  </View>
                  <View style={styles.username}>
                    <Text>{item.username}</Text>
                  </View>
                  <View style={styles.total}>
                    {
                      item.totalAmount > 0 ? 
                        <Input
                          label={i18n.t("debting")}
                          style={{ color: "red" }}
                          value={item.totalAmount + "K"}
                          editable={false}
                        />
                      : <Input
                          label={i18n.t("debted")}
                          style={{ color: "green" }}
                          value={item.totalAmount + "K"}
                          editable={false}
                        />
                   }
                    {/* <Text>{item.totalAmount} K</Text> */}
                  </View>
                </TouchableOpacity>
              )}
            />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  avatar:{
    height: 100,
    padding: 10,
    width: '20%',
    alignItems: 'center',
  },
  username:{
    height: 100,
    padding: 10,
    width: '40%',
    textAlign: 'left',
    textAlignVertical: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  total:{
    height: 100,
    padding: 10,
    width: '40%',
    fontSize: 25,
    textAlign: 'right',
    textAlignVertical: 'center',
    fontWeight: 'bold'
  },
  item :{
    height: 100,
    padding: 10,
    width: '50%',
    alignItems: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  }
});
