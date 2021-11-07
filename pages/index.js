import { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components'
import Map from '../components/Map';
import Link from 'next/link'
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/dist/client/router';


export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          name: user.displayName,
          photo: user.photoURL
        });
      } else {
        setUser(null);
        router.push('/login')
      }
    })
  }, [])

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberImage src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"></UberImage>
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage onClick={() => signOut(auth)} src={user && user.photo}></UserImage>
          </Profile>
        </Header>
        <ActionButtons>
          <Link passHref={true} href="/search">
            <ActionButton>
              Ride
              <ActionButtonImage src="https://i.ibb.co/Xx4G91m/uberblack.png"></ActionButtonImage>
            </ActionButton>
          </Link>
          <Link passHref={true} href="/search">
            <ActionButton>
              Wheels
              <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png"></ActionButtonImage>
            </ActionButton>
          </Link>
          <Link passHref={true} href="/search">
            <ActionButton>
              Reserve
              <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png"></ActionButtonImage>
            </ActionButton>
          </Link>
        </ActionButtons>
        <Link passHref={true} href="/search">
          <InputButton>
            Where to ?
          </InputButton>
        </Link>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col  h-screen
`
const Header = tw.div`
flex justify-between items-center
`
const UberImage = tw.img`
  h-28
`
const ActionItems = tw.div`
flex-1
`
const Profile = tw.div`
flex items-center
`
const Name = tw.div`
mx-4 w-20 text-sm
`
const UserImage = tw.img`
h-12 rounded-full border border-grey-200 padding-px cursor-pointer
`
const ActionButtons = tw.div`
flex mt-2 mx-2
`

const ActionButton = tw.div`
flex flex-1 flex-col items-center justify-center bg-gray-200  rounded-lg m-3 h-20 transform hover:scale-105 transition cursor-pointer
`

const ActionButtonImage = tw.img`
h-3/5
`

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mx-5 my-3 cursor-pointer rounded-md
`
