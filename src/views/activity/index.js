import React, { PureComponent } from 'react';
import { Text, SectionList, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';
import numeral from 'numeral';

import activities from '../../../data/activities.json';
import {
  fontSizeIcon,
  fontSizeNote,
  colorGray,
  fontSizeHeadline,
  colorRed
} from '../../styles/_variables.js';
import { ItemSeparator } from '../../components/itemSeparator.js';
import { ACTIVITY_DETAIL } from '../../routes/type.js';

class Activity extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activities: activities
    };
  }

  renderDescription = item => {
    let rs = '';
    rs +=
      item.individuals.length > 0
        ? 'Với ' + _.join(item.individuals.map(v => v.name), ', ')
        : '';
    rs += item.groups.length && item.individuals.length ? '. ' : '';
    rs +=
      item.groups.length > 0
        ? 'Thuộc nhóm ' + _.join(item.groups.map(v => v.name), ', ')
        : '';
    return rs;
  };

  render() {
    return (
      <SectionList
        sections={this.state.activities}
        keyExtractor={(item, index) => (item.id + index).toString()}
        ItemSeparatorComponent={() => <ItemSeparator />}
        renderSectionHeader={({ section: { date } }) => (
          <View
            style={{
              backgroundColor: colorGray,
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 10,
              paddingRight: 10
            }}
          >
            <Text style={{ fontWeight: 'bold', fontSize: fontSizeHeadline }}>
              {date}
            </Text>
          </View>
        )}
        renderItem={({ item }) => (
          <ListItem
            leftAvatar={{
              rounded: true,
              containerStyle: { margin: 5 },
              onPress: () => alert('hey'),
              source: { uri: item.icon },
              size: 'large'
            }}
            onPress={() =>
              this.props.navigation.navigate(ACTIVITY_DETAIL, {
                title: item.name,
                detail: item
              })
            }
            title={item.name}
            subtitle={
              <View>
                <View>
                  <Text
                    style={{
                      color: colorGray,
                      marginTop: 3,
                      fontSize: fontSizeNote
                    }}
                  >
                    {this.renderDescription(item.participants)}
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1,
                    marginTop: 5
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontSize: fontSizeNote
                      }}
                    >
                      Tổng:{' '}
                      <Text
                        style={{
                          fontSize: fontSizeNote,
                          color: colorRed
                        }}
                      >
                        {numeral(item.amount).format('0.0a')}
                      </Text>
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: fontSizeNote
                      }}
                    >
                      Bạn:{' '}
                      <Text
                        style={{
                          fontSize: fontSizeNote,
                          color: colorRed
                        }}
                      >
                        {numeral(item.yourAmount).format('0.0a')}
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
            }
            rightIcon={{
              name: 'navigate-next',
              type: 'material-icon',
              size: fontSizeIcon
            }}
          />
        )}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Activity);
