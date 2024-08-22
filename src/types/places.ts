export interface Place {
  description: string;
  place_id: string;
  latitude: number;
  longitude: number;
}

export interface PlacesState {
  places: Place[];
  error: string | null;
}

export interface AutocompletePrediction {
  description: string;
  place_id: string;
  latitude: number;
  longitude: number;
}
