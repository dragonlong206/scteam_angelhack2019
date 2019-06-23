import Imutable from 'immutable';
import { TAB_REV_EXP } from '../../utils/constants';
import actionTypes from '../actions/actionTypes';

const initalSate = Imutable.Map({
  tabHeader: TAB_REV_EXP
});

export default (state = initalSate, action) => {
  switch (action.type) {
    case actionTypes.TAB_HEADER:
      return state.update(update => {
        return update.set('tabHeader', action.payloads);
      });
    default:
      return state;
  }
};
