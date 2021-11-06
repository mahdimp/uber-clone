import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import { CarList } from '../data/CarList'


const RideSelector = () => {
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
                                <Time>5m away</Time>
                            </CarDetails>
                            <Price>25.5$</Price>
                        </Car>
                    ))
                }
            </CarContainer>
        </Wrapper>
    )
}
const Wrapper = tw.div`
flex-1
`

const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`

const CarContainer = tw.div`
flex flex-col
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
