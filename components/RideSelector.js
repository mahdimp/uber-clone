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

const CarList = tw.div``;
const Car = tw.div``;
const CarImage = tw.img``
const CarDetails = tw.div``;
const Service = tw.div``;
const Time = tw.div``;
const Price = tw.div``;



export default RideSelector
