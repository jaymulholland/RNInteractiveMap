import React from 'react';
import { Alert, Text, View } from 'react-native';
import MapView, { Marker, Callout, Region } from 'react-native-maps';
import { markers, MarkerType } from '../markers';


const INITIAL_REGION: Region = {
  latitude: 51.5072,
  longitude: -0.1276,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01
};

const MapScreen = () => {
  const onMarkerSelected = (marker: MarkerType) => {
    Alert.alert(marker.name);
  };

  const calloutPressed = () => {
    Alert.alert('Callout pressed');
  };

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={INITIAL_REGION}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          title={marker.name}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude
          }}
          onPress={() => onMarkerSelected(marker)}
        >
          <Callout onPress={calloutPressed}>
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 18 }}>{marker.name}</Text>
            </View>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
};

export default MapScreen;