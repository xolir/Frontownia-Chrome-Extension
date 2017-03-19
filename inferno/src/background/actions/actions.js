import * as constants from '../constants/constants';

export const setMeetingsData = (data) => ({
  type: constants.SET_MEETINGS_DATA,
  data
});

export const fetchMeetingsData = () => ({
  type: constants.FETCH_MEETINGS_DATA
});

export const clearMeetingsData = () => ({
  type: constants.CLEAR_MEETINGS_DATA
});