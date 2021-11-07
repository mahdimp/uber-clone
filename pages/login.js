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
            <UberLogo src="https://i.ibb.com/ZMhy8ws/uber.clone.png"></UberLogo>
            <Title>Login to access your account</Title>
            <HeaderImage src="https://i.ibb.com/CsV9RYZ/login-user.png"></HeaderImage>
            <SignInButton onClick={()=> signInWithPopup(auth, provider )}>Sign in with google</SignInButton>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div``
const Title = tw.div``
const UberLogo = tw.img``
const HeaderImage = tw.img``
const SignInButton = tw.button``
