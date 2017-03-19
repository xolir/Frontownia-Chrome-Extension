import * as constants from '../constants/constants';

const initialState = {
  meetings: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_MEETINGS_DATA:
      return Object.assign({}, state, {
        meetings: action.data.meetings
      });
    case constants.CLEAR_MEETINGS_DATA:
      return Object.assign({}, state, {
        meetings: []
      });
    default:
      return state;
  }
};