import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFoZGltcCIsImEiOiJjazJmdzdiZ24wbW12M3BvMnIyYWppbXNiIn0.sTFFue68x8aPsuekEiZLNg';


export default function Home() {
 

  useEffect(()=>{
     const  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: {lng :	59.599457, lat:	36.310699},
    zoom:5
    });
  })
  return (
    <Wrapper>
      <Map id="map"></Map>
      <ActionItems>Start</ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col bg-red-300 h-screen
`

const Map = tw.div`
  bg-red-500 flex-1
`

const ActionItems = tw.div`
flex-1
`
