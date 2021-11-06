/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components/dist/tailwind'
import Map from '../components/Map';
import RideSelector from '../components/RideSelector';

const API_TOKEN = "pk.eyJ1IjoibWFoZGltcCIsImEiOiJjazJmdzdiZ24wbW12M3BvMnIyYWppbXNiIn0.sTFFue68x8aPsuekEiZLNg";

const Confirm = () => {

    const [pickUpCoordinates, setPickUpCoordinates] = useState()
    const [dropOffCoordinates, setDropOffCoordinates] = useState()

    const getPickupCoordinates = (name) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name}.json?` + new
            URLSearchParams({
                access_token: API_TOKEN,
                limit: 1
            }))
            .then(res => res.json())
            .then(res => {
                if (res && res.features) {
                    const coordinate = res.features[0].center;
                    pickUpCoordinates = coordinate;
                    setPickUpCoordinates(coordinate)

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
                if (res && res.features) {
                    const coordinate = res.features[0].center;
                    setDropOffCoordinates(coordinate)

                }
            })
    }

    useEffect(() => {
        getPickupCoordinates('Quchan');
        getDropOffCoordinates('Mashhad');
    }, []);

    return (
        <Wrapper>
            <Map
                pickUpCoordinates={pickUpCoordinates}
                dropOffCoordinates={dropOffCoordinates}
            />
            <RideContainer>
                <RideSelector />
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}




export default Confirm

const Wrapper = tw.div`
flex h-screen flex-col
`

const ConfirmButtonContainer = tw.div`
border-t-2 cursor-pointer
`

const ConfirmButton = tw.div`
bg-black text-white text-center m-4 py-4 text-xl
`

const RideContainer = tw.div`
flex flex-1 flex-col h-1/2
`
