import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import AddActivityDetail from '../views/expense/addActivityDetail';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import { TAB_ACTIVITIES, TAB_GROUP } from '../utils/constants';
import AddGroup from '../views/expense/addGroup';
import AddActivity from '../views/expense/addActivity';

class AddEverything extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderView = () => {
    const { tabHeader } = this.props;
    let view = <AddActivityDetail />;
    switch (tabHeader) {
      case TAB_ACTIVITIES:
        view = <AddActivity />;
        break;
      case TAB_GROUP:
        view = <AddGroup />;
        break;

      default:
        break;
    }
    return view;
  };

  render() {
    return this.renderView();
  }
}

const mapStateToProps = state => ({
  tabHeader: state.reducer.get('tabHeader')
});

const mapDispatchToProps = {
  changeTabHeader: actions.changeTabHeader
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEverything);
