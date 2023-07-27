import MapView, {Marker} from 'react-native-maps';
import React, {useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import {selectDestination, selectOrigin} from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  useEffect(() => {
    if (origin && destination) {
      setTimeout(() => {
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
          edgePadding: {top: 100, right: 100, bottom: 100, left: 100},
          animated: true,
        });
      }, 100);
    }
  }, [origin, destination]);

  return (
    <MapView
      ref={mapRef}
      style={{flex: 1}}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}>
      <Marker
        coordinate={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
        }}
        title="Origin"
        description={origin.description}
        identifier="origin"
      />

      {destination && origin && (
        <>
          <MapViewDirections
            origin={origin.description}
            destination={destination.description}
            apikey="AIzaSyBg4DL_QkO3H89vVVdlzlJ7ZrAiGbDmj1w"
            strokeWidth={3}
            strokeColor="blue"
          />
          <Marker
            coordinate={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }}
            title="Destination"
            description={destination.description}
            identifier="destination"
            pinColor="green"
          />
        </>
      )}
    </MapView>
  );
};

export default Map;
