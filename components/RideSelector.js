import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'


const RideSelector = () => {
    return (
        <Wrapper>
            <Title>Choose a ride or swipe up for more</Title>
            <CarList>
                <Car>
                    <CarImage src="https://i.ibb.co/cyvcpfF/uberxz.png" />
                    <CarDetails>
                        <Service>UberX</Service>
                        <Time>5m away</Time>
                    </CarDetails>
                    <Price>25.5$</Price>
                </Car>
            </CarList>
        </Wrapper>
    )
}
const Wrapper = tw.div`
flex-1
`

const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`

const CarList = tw.div`
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
