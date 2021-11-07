import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import { useRouter } from 'next/dist/client/router'
import { signInWithPopup, onAuthStateChanged } from '@firebase/auth'
import { auth, provider } from '../firebase'
import { useEffect } from 'react'

const Login = () => {
    const router = useRouter();
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/')
            }
        })
    }, [])
    return (
        <Wrapper>
            <UberLogo src="https://i.ibb.co/ZMhy8ws/uber-logo.png"></UberLogo>
            <Title>Login to access your account</Title>
            <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png"></HeadImage>
            <SignInButton onClick={()=> signInWithPopup(auth, provider )}>Sign in with google</SignInButton>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
flex flex-col h-screen w-screen bg-gray-200 p-4
`
const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full 
`

const UberLogo = tw.img`
h-20 w-auto object-contain self-start
`

const Title = tw.div`
text-5xl pt-4 text-gray-500
`

const HeadImage = tw.img`
object-contain w-full
`
