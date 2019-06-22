import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import activityDetail from '../../../data/activity_details.json';
import { ButtonGroup } from 'react-native-elements';
import { fontSizeCaption } from '../../styles/_variables.js';

export default class ActivityDetail extends PureComponent {
  constructor(props) {
    super(props);

    let detail = activityDetail.filter(
      v =>
        v.activityId.toString() === props.navigation.state.params.id.toString()
    );

    this.state = {
      detail,
      selectedIndex: 0
    };
  }

  updateIndex = selectedIndex => this.setState({ selectedIndex });

  render() {
    const { detail, selectedIndex } = this.state;
    console.log('detail', detail);

    return (
      <View>
        <View />
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
