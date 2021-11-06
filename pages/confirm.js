import React from 'react'
import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components/dist/tailwind'
import Map from '../components/map';

const API_TOKEN = "pk.eyJ1IjoibWFoZGltcCIsImEiOiJjazJmdzdiZ24wbW12M3BvMnIyYWppbXNiIn0.sTFFue68x8aPsuekEiZLNg";

const Confirm = () => {

    const [pickOffCoordinates, setPickOffCoordinates] = useState()
    const [dropOffCoordinates, setDropOffCoordinates] = useState()

     const getPickupCoordinates = (name) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name}.json?` + new
            URLSearchParams({
                access_token: API_TOKEN,
                limit: 1
            }))
            .then(res => res.json())
            .then(res => {
                console.error(res)
                if(res && res.features){
                    const coordinate = res.features[0].center;
                    pickOffCoordinates = coordinate;
                }
            })
    }

    const getDropOffCoordinates = (name) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name}.json?` + new
            URLSearchParams({
                access_token: API_TOKEN,
                limit: 1
            }))
            .then(res => res.json())
            .then(res => {
                if(res && res.features){
                    const coordinate = res.features[0].center;
                    dropOffCoordinates = coordinate;
                }
            })
    }

    useEffect(() => {
        getPickupCoordinates('Tehran')
    }, [])

    return (
        <Wrapper>
            <Map />
        </Wrapper>
    )
}




export default Confirm

const Wrapper = tw.div`flex h-screen`
