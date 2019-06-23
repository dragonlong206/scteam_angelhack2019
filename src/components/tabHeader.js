import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import i18n from '../lang/index';
import {
  fontSizeCaption,
  colorGray,
  fontSizeIcon,
  colorRed
} from '../styles/_variables';
import actions from '../redux/actions';
import { TAB_ACTIVITIES, TAB_GROUP, TAB_REV_EXP } from '../utils/constants';

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizeCaption,
    color: colorGray
  }
});

class TabHeader extends PureComponent {
  onChangeTab = type => this.props.changeTabHeader(type);

  render() {
    const { tabHeader } = this.props;

    return (
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
          flex: 1
        }}
      >
        <TouchableOpacity onPress={() => this.onChangeTab(TAB_REV_EXP)}>
          <Icon
            color={tabHeader === TAB_REV_EXP ? colorRed : colorGray}
            size={25}
            name="attach-money"
            type="material-icon"
          />
          <Text
            style={[
              styles.text,
              { color: tabHeader === TAB_REV_EXP ? colorRed : colorGray }
            ]}
          >
            {i18n.t('rev_exp')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onChangeTab(TAB_ACTIVITIES)}>
          <Icon
            color={tabHeader === TAB_ACTIVITIES ? colorRed : colorGray}
            size={25}
            name="format-list-bulleted"
            type="material-icon"
          />
          <Text
            style={[
              styles.text,
              { color: tabHeader === TAB_ACTIVITIES ? colorRed : colorGray }
            ]}
          >
            {i18n.t('activities')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onChangeTab(TAB_GROUP)}>
          <Icon
            color={tabHeader === TAB_GROUP ? colorRed : colorGray}
            size={25}
            name="group"
            type="material-icon"
          />
          <Text
            style={[
              styles.text,
              { color: tabHeader === TAB_GROUP ? colorRed : colorGray }
            ]}
          >
            {i18n.t('group')}
          </Text>
        </TouchableOpacity>
      </View>
    );
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
)(TabHeader);
