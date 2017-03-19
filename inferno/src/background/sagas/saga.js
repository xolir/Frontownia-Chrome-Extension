import { put, call, takeEvery } from 'redux-saga/effects'
import 'babel-polyfill';

import * as constants from '../constants/constants';
import { setMeetingsData } from '../actions/actions';
import { getApiResponseHelper } from '../helpers/apiHelper';

const fetchMeetingsData = function*() {
  const data = yield call(getApiResponseHelper, 'http://localhost:3000');
  yield put(setMeetingsData(data));
};

export const mySaga = function*() {
  yield takeEvery(constants.FETCH_MEETINGS_DATA, fetchMeetingsData);
};

