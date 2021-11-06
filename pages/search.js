import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import Link from 'next/link'
import { useState } from 'react';



function Search() {
    const [dropOff, setDropOff] = useState("");
    const [pickUp, setPickUp] = useState("");
    return (
        <Wrapper>
            <Link passHref={true} href="/">
                <ButtonContainer>
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </ButtonContainer>
            </Link>
            <InputContainer>
                <FromToIcons>
                    <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
                    <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
                    <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
                </FromToIcons>
                <InputBoxes>
                    <Input value={pickUp} onChange={(e)=> {setPickUp(e.target.value)}} placeholder="Enter pickup location"></Input>
                    <Input value={dropOff} onChange={(e=> {setDropOff(e.target.value)})} placeholder="Where to?"></Input>
                </InputBoxes>
                <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
            </InputContainer>
            <SavedPlaces>
                <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
                Saved Places
            </SavedPlaces>
            <Link passHref={true} href={{
                pathname: "/confirm",
                query: {
                    pickUp,
                    dropOff
                }
            }}>
                <ConfirmButton>
                    Confirm
                </ConfirmButton>
            </Link>
        </Wrapper>
    )
}

export default Search


const Wrapper = tw.div`
bg-gray-200 h-screen
`

const ButtonContainer = tw.div`
bg-white px-4 cursor-pointer
`

const InputContainer = tw.div`
bg-white px-4 flex items-center px-4 mb-2
`

const FromToIcons = tw.div`
w-10 flex flex-col items-center
`

const Circle = tw.img`
h-2.5
`

const Line = tw.img`
h-10
`

const Square = tw.img`
h-3
`
const PlusIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
`

const BackButton = tw.img`
h-12
`

const InputBoxes = tw.div`
    flex flex-col flex-1
`

const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`

const SavedPlaces = tw.div`
bg-white my-2 flex items-center px-4 py-2
`

const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`

const ConfirmButton = tw.div`
text-white bg-black text-center mx-4 px-4 py-3 text-2xl cursor-pointer
`

