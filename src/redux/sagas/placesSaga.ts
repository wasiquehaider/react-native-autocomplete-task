import { put, takeEvery } from 'redux-saga/effects';
import {
  fetchPlaces,
  fetchPlacesSuccess,
  fetchPlacesError,
} from '@redux/slices/placesSlice';
import mockPlaces, { MockPlace } from '@src/mock/mockData';

function* fetchPlacesSaga(action: { payload: string }) {
  try {
    yield new Promise((resolve) => setTimeout(resolve, 500));

    const results: MockPlace[] = mockPlaces.filter((place) =>
      place.description.toLowerCase().includes(action.payload.toLowerCase())
    );

    yield put(fetchPlacesSuccess(results));
  } catch (error) {
    yield put(fetchPlacesError(error));
  }
}

function* watchFetchPlaces() {
  yield takeEvery(fetchPlaces.type, fetchPlacesSaga);
}

export default watchFetchPlaces;
