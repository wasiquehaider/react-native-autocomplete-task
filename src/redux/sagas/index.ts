import { all } from 'redux-saga/effects';
import watchFetchPlaces from './placesSaga';

export default function* rootSaga() {
  yield all([watchFetchPlaces()]);
}
