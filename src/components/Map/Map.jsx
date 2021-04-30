import React from 'react';
import './Map.css';
import Loading from '../Loading/Loading.jsx';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import MapStyles from './Map.styles';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
//import { formatRelative } from 'date-fns';

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '92vh',
};
const center = {
  lat: 43.653225,
  lng: -79.383186,
};
const options = {
  styles: MapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const cordinateList = [
  {
    lat: 43.14506241157973,
    lng: -80.31427730859374,
    time: new Date(),
    info: '2 cıkıstaki ısıklara dikkat et',
  },
  {
    lat: 43.321157725277914,
    lng: -80.75373043359374,
    time: new Date(),
    info: '1. cıkıs sıkıntılı biraz',
  },
  {
    lat: 42.92422789558916,
    lng: -80.96796383203124,
    time: new Date(),
    info: 'görkem araba sürüyo dikkat et.',
  },
];

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    //googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    googleMapsApiKey: 'AIzaSyAIvSdAGkHEJ3kkOUJWUfHss2SE3jVxMmI',
    libraries,
  });

  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [infoText, setInfoText] = React.useState('');

  // development

  const calculateMiddlePoint = (lat1, lng1, lat2, lng2) => {};

  // setMarkers((current) => [...current, cordinateList]);
  //console.log(cordinateList);
  const onDataLoadShowMarker = React.useCallback((list) => {
    setMarkers((current) => [...current].concat(list));
  }, []);

  //------------------------

  const onMapClick = React.useCallback((event) => {
    onDataLoadShowMarker(cordinateList);
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
        info: 'Zeynep Ehliyet almış \n dikkat et dostum !!!!',
      },
    ]);
    console.log('markers', markers);
  }, []);

  const onInfoClick = React.useCallback((event) => {
    console.log('Info :', infoText);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  });

  if (loadError) return 'Error loading Maps';
  if (!isLoaded) return <Loading />;

  return (
    <div>
      <Locate panTo={panTo} />
      <Search panTo={panTo} />

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: '/danger_icon.png',
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
            onClick={() => {
              setInfoText(marker.info);
              console.log(infoText);
              setSelected(marker);
            }}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>Potanciel Crash</h2>
              <p>{infoText}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};

function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img src="/compass.png" alt="compass - locate me" />
    </button>
  );
}

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.65324, lng: () => -79.3832 },
      radius: 200 * 1000,
    },
  });

  return (
    <div className="search">
      <Combobox
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions();
          try {
            const result = await getGeocode({ address });
            const { lat, lng } = await getLatLng(result[0]);
            panTo({ lat, lng });
            //  console.log(lat, lng);
            // console.log(result[0]);
          } catch (error) {
            console.log('error!');
          }
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="Enter an Adress"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === 'OK' &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default Map;
