import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import Map from '../components/map';

const Confirm = () => {
    return (
        <Wrapper>
            <Map/>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`flex h-screen`
