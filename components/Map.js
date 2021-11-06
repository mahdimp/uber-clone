import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFoZGltcCIsImEiOiJjazJmdzdiZ24wbW12M3BvMnIyYWppbXNiIn0.sTFFue68x8aPsuekEiZLNg';


const  Map =  () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: { lng: 59.599457, lat: 36.310699 },
          zoom: 5
        });
      })
    return (
        <Wrapper id='map'>
        </Wrapper>
    )
}

export default Map;

const Wrapper = tw.div`
flex flex-1
`

