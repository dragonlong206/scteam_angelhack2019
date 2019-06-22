import Imutable from 'immutable';
import _ from 'lodash';

const initalSate = Imutable.Map({});

export default (state = initalSate, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
