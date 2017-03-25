import * as constants from '../constants/constants';

const initialState = {
  meetings: [],
  visitedPages: []
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
    case constants.LOG_USER_VISITED_PAGE:
      return Object.assign({}, state, {
        visitedPages: state.visitedPages.concat({
          url: action.pageURL
        })
      });
    default:
      return state;
  }
};