import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import { ColorModeButton } from './ui/color-mode'
const Navbar = () => {
  return (
    <HStack justifyContent='space-between' px='2.5'>
        <Image src={logo} boxSize='60px'/>
        <ColorModeButton/>
    </HStack>
  )
}

export default Navbar