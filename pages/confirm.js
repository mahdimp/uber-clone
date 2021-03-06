/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/dist/client/router';
import React from 'react'
import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components/dist/tailwind'
import Map from '../components/Map';
import RideSelector from '../components/RideSelector';
import Link from 'next/dist/client/link';
import { mapBoxApiToken, mapBoxPlacesApiUrl } from '../constants/MapBox';


const Confirm = () => {
    const router = useRouter();
    const { pickUp, dropOff } = router.query;
    const [pickUpCoordinates, setPickUpCoordinates] = useState()
    const [dropOffCoordinates, setDropOffCoordinates] = useState()

    const getPickupCoordinates = (name) => {
        fetch(`${mapBoxPlacesApiUrl}/${name}.json?` + new
            URLSearchParams({
                access_token: mapBoxApiToken,
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
        fetch(`${mapBoxPlacesApiUrl}/${name}.json?` + new
            URLSearchParams({
                access_token: mapBoxApiToken,
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
        console.dir({
            pickUpCoordinates, dropOffCoordinates
        })
        getPickupCoordinates(pickUp);
        getDropOffCoordinates(dropOff);
    }, [pickUp, dropOff]);

    return (
        <Wrapper>
            <Link passHref={true} href="/search">
                <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
            </Link>
            <Map
                pickUpCoordinates={pickUpCoordinates}
                dropOffCoordinates={dropOffCoordinates}
            />
            <RideContainer>
                <RideSelector
                    pickUpCoordinates={pickUpCoordinates}
                    dropOffCoordinates={dropOffCoordinates}
                />
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

const BackButton = tw.img`
fixed top-5 left-5 z-50 bg-white rounded-full shadow-md cursor-pointer
`

const ConfirmButtonContainer = tw.div`
border-t-2 cursor-pointer
`

const ConfirmButton = tw.div`
bg-black text-white text-center m-4 py-4 text-xl border rounded-md
`

const RideContainer = tw.div`
flex flex-1 flex-col h-1/2
`
