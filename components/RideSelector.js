import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import { mapBoxApiToken, mapBoxDrivingApiUrl } from '../constants/MapBox'
import { CarList } from '../data/CarList'
import { useState, useEffect } from 'react'


const RideSelector = ({ pickUpCoordinates, dropOffCoordinates }) => {
    const [rideDuration, setRideDuration] = useState(0)

    useEffect(() => {
        if (pickUpCoordinates && dropOffCoordinates) {
            const requestAddress = `${mapBoxDrivingApiUrl}/${pickUpCoordinates[0]},${pickUpCoordinates[1]};${dropOffCoordinates[0]},${dropOffCoordinates[1]}?access_token=${mapBoxApiToken}`;
            return fetch(requestAddress)
                .then(res => res.json())
                .then(data => {
                    setRideDuration((data.routes[0].duration / 100).toFixed())
                })
        }
    }, [pickUpCoordinates, dropOffCoordinates])

    const getDriverDistance = () => Math.floor(Math.random() * 7) + 2;


    return (
        <Wrapper>
            <Title>Choose a ride or swipe up for more</Title>
            <CarContainer>
                {
                    CarList.map((car, index) => (
                        <Car key={index}>
                            <CarImage src={car.imgUrl} />
                            <CarDetails>
                                <Service>{car.service}</Service>
                                <Time>{getDriverDistance()}m away</Time>
                            </CarDetails>
                            <Price>{'$' + (rideDuration * car.multiplier).toFixed(2)}</Price>
                        </Car>
                    ))
                }
            </CarContainer>
        </Wrapper>
    )
}
const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`

const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`

const CarContainer = tw.div`
flex flex-col overflow-y-scroll
`;

const Car = tw.div`
flex p-4 items-center
`;

const CarImage = tw.img`
h-14 mr-4
`

const CarDetails = tw.div`
flex-1
`;

const Service = tw.div`
font-medium
`;

const Time = tw.div`
text-xs text-blue-500
`;

const Price = tw.div`text-sm`;



export default RideSelector
