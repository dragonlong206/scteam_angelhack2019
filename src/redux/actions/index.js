import actionTypes from './actionTypes';

export default {
  changeTabHeader: type => {
    return function(dispatch) {
      try {
        dispatch({
          type: actionTypes.TAB_HEADER,
          payloads: type
        });
      } catch (error) {}
    };
  }
};
