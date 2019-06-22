import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Avatar, Input, Icon, Button } from 'react-native-elements';
import { colorGray, colorWhite, colorBlack } from '../../styles/_variables';

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
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemRight: {
    flex: 5
  },
  groupAdd: {
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: colorGray,
    paddingBottom: 5
  },
  groupTag: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5
  },
  itemTag: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colorGray,
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
    marginRight: 10
  }
});

class AddGroup extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <View style={styles.itemLeft}>
            <Avatar size="medium" rounded icon={{ name: 'home' }} />
          </View>
          <View style={styles.itemRight}>
            <Input placeholder="Tên Nhóm" />
          </View>
        </View>

        <View style={styles.groupAdd}>
          <View>
            <Text>Thành viên</Text>
          </View>
          <View style={styles.groupTag}>
            <View style={styles.itemTag}>
              <Icon
                type="font-awesome"
                name="user"
                style={{ marginRight: 3 }}
              />
              <Text>Bạn</Text>
            </View>
            <View style={styles.itemTag}>
              <Icon
                type="font-awesome"
                name="users"
                style={{ marginRight: 3 }}
              />
              <Text>Nhóm</Text>
            </View>
          </View>
        </View>

        <View style={{ padding: 10, marginTop: 10 }}>
          <Button title="Lưu" raised={true} />
          <Button
            title="Huỷ bỏ"
            type="outline"
            raised={true}
            containerStyle={{ marginTop: 10 }}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddGroup);
