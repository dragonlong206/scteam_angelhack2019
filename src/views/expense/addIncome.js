import React, { PureComponent } from "react";
import { View, TouchableOpacity } from "react-native";
import {
  Input,
  Icon,
  Text,
  ButtonGroup,
  CheckBox,
  Button
} from "react-native-elements";
import i18n from "../../lang/index";
import MultiSelect from "react-native-multiple-select";
import style from "../../styles/component";
import incomeStyle from "../../styles/addIncome";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import { connect } from "react-redux";
import _ from "lodash";
import Modal from "react-native-modal";
import Snackbar from "react-native-snackbar";

const itemActivity = [
  {
    id: "1",
    name: "Tiền nhà"
  },
  {
    id: "2",
    name: "Tiền điện"
  },
  {
    id: "3",
    name: "Nha Trang Trip"
  }
];

const component1 = () => <Text>Chia đều</Text>;
const component2 = () => <Text>Tuỳ chỉnh</Text>;

class AddIncome extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
      isDateIncomeVisible: false,
      whoExpense: [],
      dateIncome: null,
      splitIndex: 0,
      users: [],
      openCustomSplit: false,
      userSplits: []
    };
    this.updateIndexSplit = this.updateIndexSplit.bind(this);
  }
  componentDidMount() {
    this.setState({
      users: [
        {
          id: "1",
          name: "Thanh Bùi",
          checked: false
        },
        {
          id: "2",
          name: "Mỹ Nguyễn",
          checked: false
        },
        {
          id: "3",
          name: "Long Lê",
          checked: false
        },
        {
          id: "4",
          name: "Minh Ngô",
          checked: false
        },
        {
          id: "5",
          name: "Thanh Nguyễn",
          checked: false
        }
      ]
    });
  }

  updateIndexSplit(selectedIndex) {
    const { users } = this.state;
    this.setState({ splitIndex: selectedIndex });
    if (selectedIndex == 1) {
      const userSplits = _.filter(users, (item, index) => {
        return item.checked === true;
      });
      if (userSplits && userSplits.length > 0) {
        this.setState({ openCustomSplit: true });
      } else {
        this.setState({ splitIndex: 0 });
      }
    }
  }

  onSelectedActivity = selectedItems => {
    this.setState({ selectedItems });
  };

  onSelectedWhoExpense = selectedItems => {
    this.setState({ whoExpense: selectedItems });
  };

  showDateTimePicker = () => {
    this.setState({ isDateIncomeVisible: true });
  };

  hideDateIncome = () => {
    this.setState({ isDateIncomeVisible: false });
  };

  handleDateIncome = date => {
    this.setState({
      dateIncome: moment(date),
      isDateIncomeVisible: false
    });
  };

  onPressDateIncome = () => {};

  onChangeSelectUsersplit = user => {
    let { users, userSplits } = this.state;

    const _users = _.clone(users);
    const _userSplits = _.clone(userSplits);

    let item = _users.findIndex(i => {
      return i.id === user.id;
    });
    _users[item].checked = !_users[item].checked;

    if (_users[item].checked == true) {
      let userChoose = _users[item];
      userChoose.isSplitMoney = false;
      _userSplits.push(userChoose);
    } else {
      if (item >= 0 && _users && _users[item]) {
        _.remove(_userSplits, i => {
          return i.id == _users[item].id;
        });
      }
    }

    this.setState({
      users: _users,
      userSplits: _userSplits
    });
  };

  onChangeSplitType = user => {
    let { userSplits } = this.state;

    const _userSplits = _.clone(userSplits);

    let item = _userSplits.findIndex(i => {
      return i.id === user.id;
    });
    _userSplits[item].isSplitMoney = !_userSplits[item].isSplitMoney;
    this.setState({
      userSplits: _userSplits
    });
  };

  renderUsersplit = () => {
    const { users } = this.state;
    var result = users.map(item => {
      return (
        <View key={item.id} style={incomeStyle.splitIncomeUserItem}>
          <View>
            <CheckBox
              checked={item.checked}
              onPress={() => this.onChangeSelectUsersplit(item)}
              containerStyle={incomeStyle.checkBoxSplitContainer}
            />
          </View>
          <View>
            <Text>{item.name}</Text>
          </View>
          <View>
            <Text>1/2</Text>
          </View>
        </View>
      );
    });
    return result;
  };

  showSnackbar = () => {
    Snackbar.show({
      title: "Lưu thành công!",
      duration: Snackbar.LENGTH_LONG
    });
  };

  renderCustomSplit = () => {
    const { users, userSplits } = this.state;
    // const userSplits = _.filter(users, (item, index) => {
    //   return item.checked === true;
    // });

    var result = userSplits.map(item => {
      return (
        <View key={item.id} style={incomeStyle.splitIncomeUserItem}>
          <View style={{ flex: 0.3 }}>
            <Text>{item.name}</Text>
          </View>
          <View style={incomeStyle.customeTypeWrapper}>
            <View style={incomeStyle.customeTypeItem}>
              <View style={{ flex: 0.1 }}>
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  center
                  containerStyle={incomeStyle.checkBoxSplitContainer}
                  checked={!item.isSplitMoney}
                  onPress={() => {
                    this.onChangeSplitType(item);
                  }}
                />
              </View>
              <View style={{ flex: 0.9 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center"
                  }}
                >
                  <Input
                    placeholder={"Tỉ lệ"}
                    keyboardType="numeric"
                    containerStyle={{ flex: 0.4 }}
                    textStyle={{ margin: 0, padding: 0, fontSize: 12 }}
                  />
                  <Text style={{ fontSize: 18 }}>/</Text>
                  <Input
                    keyboardType="numeric"
                    containerStyle={{ flex: 0.4 }}
                    value={"100"}
                  />
                </View>
              </View>
            </View>
            <View style={incomeStyle.customeTypeItem}>
              <View style={{ flex: 0.1 }}>
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  center
                  containerStyle={incomeStyle.checkBoxSplitContainer}
                  checked={item.isSplitMoney}
                  onPress={() => {
                    this.onChangeSplitType(item);
                  }}
                />
              </View>
              <View style={{ flex: 0.9 }}>
                <Input placeholder={"Số tiền"} keyboardType="numeric" />
              </View>
            </View>
          </View>
        </View>
      );
    });
    return result;
  };
  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={incomeStyle.buttonCloseModel}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    const buttons = [{ element: component1 }, { element: component2 }];
    const {
      selectedItems,
      whoExpense,
      dateIncome,
      splitIndex,
      users,
      openCustomSplit
    } = this.state;

    return (
      <View>
        <View style={style.formItem}>
          <View style={style.multiSelectWrapper}>
            <Text style={style.multiSelectLabel}>{i18n.t("activities")}</Text>
            <MultiSelect
              items={itemActivity}
              uniqueKey="id"
              selectedItems={selectedItems}
              displayKey="name"
              onSelectedItemsChange={this.onSelectedActivity}
              single={true}
            />
          </View>
        </View>
        <View style={style.formItem}>
          <Input
            placeholder={i18n.t("money_placeholder")}
            label={i18n.t("money_label")}
            keyboardType="numeric"
          />
        </View>
        <View style={style.formItem}>
          <TouchableOpacity
            onPress={() => {
              this.showDateTimePicker();
            }}
          >
            <Input
              placeholder={i18n.t("date_income_placeholder")}
              label={i18n.t("date_income_label")}
              editable={false}
              onPress={() => {
                this.showDateTimePicker();
              }}
              value={
                dateIncome != null ? dateIncome.format("DD/MM/YYYY") : null
              }
            />
          </TouchableOpacity>

          <DateTimePicker
            isVisible={this.state.isDateIncomeVisible}
            onConfirm={this.handleDateIncome}
            onCancel={this.hideDateIncome}
          />
        </View>
        <View style={style.formItem}>
          <Input
            placeholder={i18n.t("note_placeholder")}
            label={i18n.t("note_label")}
          />
        </View>
        <View style={style.formItem}>
          <View style={style.multiSelectWrapper}>
            <Text style={style.multiSelectLabel}>
              {i18n.t("who_expense_label")}
            </Text>
            <MultiSelect
              items={users}
              uniqueKey="id"
              selectedItems={whoExpense}
              displayKey="name"
              onSelectedItemsChange={this.onSelectedWhoExpense}
              single={true}
            />
          </View>
        </View>
        <View style={style.formItem}>
          <View style={incomeStyle.splitWrapper}>
            <View style={incomeStyle.splitLabel}>
              <Text>Chia tiền</Text>
            </View>
            <View style={incomeStyle.splitLabel}>
              <ButtonGroup
                onPress={this.updateIndexSplit}
                selectedIndex={splitIndex}
                buttons={buttons}
                containerStyle={{ height: 30 }}
              />
            </View>
          </View>
          <View style={incomeStyle.splitIncomeUserWrapper}>
            {this.renderUsersplit()}
          </View>
        </View>
        <View style={style.formItem}>
          <View style={incomeStyle.buttonActionWrapper}>
            <Button
              style={{ marginBottom: 10 }}
              title="Lưu"
              onPress={() => {
                this.showSnackbar();
              }}
            />
            <Button title="Huỷ bỏ" type="outline" />
          </View>
        </View>
        <View>
          <Modal
            isVisible={openCustomSplit}
            swipeDirection="up"
            style={incomeStyle.bottomModal}
          >
            <View style={incomeStyle.modelView}>
              {this.renderCustomSplit()}
              {this._renderButton("Lưu", () =>
                this.setState({ openCustomSplit: false })
              )}
            </View>
          </Modal>
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
)(AddIncome);
