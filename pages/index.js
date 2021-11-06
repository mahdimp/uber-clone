import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import Map from '../components/map';
import Link from 'next/link'


export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberImage src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"></UberImage>
          <Profile>
            <Name>Mahdi MP</Name>
            <UserImage src="https://avatars.githubusercontent.com/u/106799?s=120&v=4"></UserImage>
          </Profile>
        </Header>
        <ActionButtons>
          <Link passHref={true} href="/search">
            <ActionButton>
              Ride
              <ActionButtonImage src="https://i.ibb.co/Xx4G91m/uberblack.png"></ActionButtonImage>
            </ActionButton>
          </Link>
          <ActionButton>
            Wheels
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png"></ActionButtonImage>
          </ActionButton>
          <ActionButton>
            Reserve
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png"></ActionButtonImage>
          </ActionButton>
        </ActionButtons>
        <InputButton>
          Where to ?
        </InputButton>
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
h-12 rounded-full border border-grey-200 padding-px
`
const ActionButtons = tw.div`
flex mt-5 mx-2
`

const ActionButton = tw.div`
flex flex-1 flex-col items-center justify-center bg-gray-200  rounded-lg m-3 h-32 transform hover:scale-105 transition
`

const ActionButtonImage = tw.img`
h-3/5
`

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mx-4
`
