import * as constants from '../constants/constants';

export const setMeetingsData = (data) => ({
  type: constants.SET_MEETINGS_DATA,
  data
});

export const fetchMeetingsData = () => ({
  type: constants.FETCH_MEETINS_DATA
});
