import MapView, {Marker} from 'react-native-maps';
import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const dispatch = useDispatch();
  const mapApiKey = 'AIzaSyC1WtYykLeqWqpf-IG8eGFFPC4aBYdwnqw';

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

  useEffect(() => {
    if (!origin || !destination) return;
    const getTravelTime = async () => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${mapApiKey}`,
      )
        .then(res => res.json())
        .then(data => {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
        });
    };
    getTravelTime();
  }, [origin, destination, mapApiKey]);

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
            apikey={mapApiKey}
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
