import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import Map from '../components/map';
import { useEffect } from 'react';

const Confirm = () => {

    useEffect(() => {
        getCoordinates()
    }, [])

    const getCoordinates = (name) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name}?` + new
            URLSearchParams({
                access_token: "pk.eyJ1IjoibWFoZGltcCIsImEiOiJjazJmdzdiZ24wbW12M3BvMnIyYWppbXNiIn0.sTFFue68x8aPsuekEiZLNg",
                limit: 1
            })).then(res => {
                console.log(res)
            })
    }

    return (
        <Wrapper>
            <Map />
        </Wrapper>
    )
}




export default Confirm

const Wrapper = tw.div`flex h-screen`
