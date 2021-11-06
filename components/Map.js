import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFoZGltcCIsImEiOiJjazJmdzdiZ24wbW12M3BvMnIyYWppbXNiIn0.sTFFue68x8aPsuekEiZLNg';


const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: { lng: 59.599457, lat: 36.310699 },
      zoom: 5
    });


    if (props.pickUpCoordinates) {
      addMarkerToMap(map,props.pickUpCoordinates);
    }

    if (props.dropOffCoordinates) {
      addMarkerToMap(map,props.dropOffCoordinates);
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

