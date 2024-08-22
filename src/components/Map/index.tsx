import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, Dimensions } from 'react-native';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from '@utils/index';
interface MapProps {
  center: {
    latitude: number;
    longitude: number;
  };
}

const Map: React.FC<MapProps> = ({ center }) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: center.latitude,
          longitude: center.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={center} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
  },
});

export default Map;
