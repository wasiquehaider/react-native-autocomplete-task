import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AutoCompleteInput from '@components/AutoCompleteInput';
import SearchResults from '@components/SearchResults';
import Map from '@components/Map';
import { AutocompletePrediction } from '@src/types/places';

const SearchScreen: React.FC = () => {
  const [mapCenter, setMapCenter] = useState({
    latitude: 37.0902,
    longitude: -95.7129,
    latitudeDelta: 30,
    longitudeDelta: 30,
  });

  const handlePlaceClick = (place: AutocompletePrediction) => {
    setMapCenter({
      latitude: place.latitude,
      longitude: place.longitude,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.autoComplete}>
        <Text style={styles.title}>Search for Cities</Text>
        <AutoCompleteInput />
        <SearchResults onPlaceClick={handlePlaceClick} />
      </View>
      <Map center={mapCenter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  autoComplete: {
    backgroundColor: '#fff',
    padding: 15,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 99,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default SearchScreen;
