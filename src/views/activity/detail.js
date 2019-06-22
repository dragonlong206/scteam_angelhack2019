import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import activityDetail from '../../../data/activity_details.json';
import { Avatar, Input, Icon, Button } from 'react-native-elements';
import { ButtonGroup } from 'react-native-elements';
import { fontSizeCaption } from '../../styles/_variables.js';

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
      name: props.navigation.state.params.title
    };
  }

  updateIndex = selectedIndex => this.setState({ selectedIndex });

  render() {
    const { detail, selectedIndex } = this.state;
    console.log('detail', detail);

    return (
      <View>
        <View>
        <View style={styles.info}>
          <View style={styles.itemLeft}>
            <Avatar size="medium" rounded icon={{ name: 'image' }} />
          </View>
          <View style={styles.itemRight}>
            <Text style={{fontSize: 20}}>{this.state.name}</Text>
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
        </View>
      </View>
    );
  }
}
