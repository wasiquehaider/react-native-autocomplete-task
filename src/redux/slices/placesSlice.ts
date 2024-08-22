import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AutocompletePrediction } from '@src/types/places';

interface PlacesState {
  places: AutocompletePrediction[];
  error: string | null;
}

const initialState: PlacesState = {
  places: [],
  error: null,
};

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    fetchPlaces: (state, action: PayloadAction<string>) => {},
    fetchPlacesSuccess: (
      state,
      action: PayloadAction<AutocompletePrediction[]>
    ) => {
      state.places = action.payload;
      state.error = null;
    },
    fetchPlacesError: (state, action: PayloadAction<string>) => {
      state.places = [];
      state.error = action.payload;
    },
    clearPlaces: (state) => {
      state.places = [];
      state.error = null;
    },
  },
});

export const {
  fetchPlaces,
  fetchPlacesSuccess,
  fetchPlacesError,
  clearPlaces,
} = placesSlice.actions;
export default placesSlice.reducer;
