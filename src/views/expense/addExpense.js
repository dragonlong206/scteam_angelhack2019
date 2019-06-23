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
import Snackbar from "react-native-snackbar";
import _ from "lodash";

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

class AddExpense extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
      isDateIncomeVisible: false,
      whoExpense: [],
      dateIncome: null,
      splitIndex: 0,
      users: [],
      payer: []
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
    this.setState({ splitIndex: selectedIndex });
  }

  onSelectedPayer = selectedIndex => {
    this.setState({ payer: selectedIndex });
  };

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
    let { users } = this.state;

    const _users = _.clone(users);

    console.log(user);
    let item = _users.findIndex(i => {
      return i.id === user.id;
    });
    _users[item].checked = !_users[item].checked;
    this.setState({
      users: _users
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

  render() {
    const buttons = [{ element: component1 }, { element: component2 }];
    const {
      selectedItems,
      whoExpense,
      dateIncome,
      splitIndex,
      users,
      payer
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
            <Text style={style.multiSelectLabel}>Người thu</Text>
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
          <View style={style.multiSelectWrapper}>
            <Text style={style.multiSelectLabel}>Người đóng</Text>
            <MultiSelect
              items={users}
              uniqueKey="id"
              selectedItems={payer}
              displayKey="name"
              onSelectedItemsChange={this.onSelectedPayer}
              single={true}
            />
          </View>
        </View>
        <View style={style.formItem}>
          <View style={incomeStyle.buttonActionWrapper}>
            <Button
              style={{ marginBottom: 10 }}
              title="Lưu"
              onPress={() => {
                Snackbar.show({
                  title: "Lưu thành công!",
                  duration: Snackbar.LENGTH_LONG
                });
              }}
            />
            <Button title="Huỷ bỏ" type="outline" />
          </View>
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
)(AddExpense);
