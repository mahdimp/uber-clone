import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl'
import { mapBoxApiToken, mapBoxStyle, mapBoxDefaultCenter } from '../constants/MapBox';

mapboxgl.accessToken = mapBoxApiToken;


const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: mapBoxStyle,
      center: mapBoxDefaultCenter,
      zoom: 5
    });


    if (props.pickUpCoordinates) {
      addMarkerToMap(map, props.pickUpCoordinates);
    }

    if (props.dropOffCoordinates) {
      addMarkerToMap(map, props.dropOffCoordinates);
    }

    if (props.dropOffCoordinates && props.pickUpCoordinates) {
      map.fitBounds([
        props.pickUpCoordinates,
        props.dropOffCoordinates
      ], {
        padding: 60
      })
    }

  }, [props.pickUpCoordinates, props.dropOffCoordinates]);
  return (
    <Wrapper id='map'>
    </Wrapper>
  )
}

const addMarkerToMap = (map, coordinates) => {
  if (!coordinates) {
    return;
  }

  console.dir(coordinates);
  const marker = new mapboxgl.Marker()
    .setLngLat({ lng: coordinates[0], lat: coordinates[1] })
    .addTo(map);
}

export default Map;

const Wrapper = tw.div`
flex flex-1 h-1/2
`

