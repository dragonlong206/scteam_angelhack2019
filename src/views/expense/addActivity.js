import React, { PureComponent } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { Avatar, Input, Icon, Button } from 'react-native-elements';
import { colorGray, colorWhite, colorBlack } from '../../styles/_variables';
import { connect } from 'react-redux';
import MultiSelect from "react-native-multiple-select";
import style from '../../styles/addActivity';
const itemActivity = [
  {
    id: "1",
    name: "Hằng ngày"
  },
  {
    id: "2",
    name: "Hằng tuần"
  },
  {
    id: "3",
    name: "Hằng tháng"
  }
];
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
class AddActivity extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
      switchValue: false
    }
  }
  // state = {switchValue:false}
  toggleSwitch = (value) => {
    //onValueChange of the switch this function will be called
    this.setState({ switchValue: value })
    //state changes according to switch
    //which will result in re-render the text
  }

  onSelectedActivity = selectedItems => {
    this.setState({ selectedItems });
  };
  
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <View style={styles.itemLeft}>
            <Avatar size="medium" rounded icon={{ name: 'image' }} />
          </View>
          <View style={styles.itemRight}>
            <Input placeholder="Tên hoạt động" />
          </View>
        </View>
        <View style={[style.LayoutTop, style.InputLapLai]}>
          <View>
            <Text style={style.LayoutLabel}>Lặp lại</Text>
          </View>
          <View>
            <Switch
              onValueChange={this.toggleSwitch}
              value={this.state.switchValue} />
          </View>
        </View>
        <View style={style.select}>
          <MultiSelect
            items={itemActivity}
            uniqueKey="id"
            selectedItems={this.state.selectedItems}
            displayKey="name"
            onSelectedItemsChange={this.onSelectedActivity}
            single={true}
          />
        </View>

        <View style={styles.groupAdd}>
          <View>
            <Text>Người tham gia</Text>
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
          <Button title="Lưu" raised={true} onPress={() => { alert('Lưu thành công')}} />
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
)(AddActivity);
