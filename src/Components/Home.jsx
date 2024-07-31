import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { GrAttachment } from "react-icons/gr"
import CardComp from '../Scenes/CardComp'

const Home = () => {
  return (
    <Box>
      {/* Buttons */}
      <Flex justifyContent="space-around">
        <Button>Research</Button>
        <Button>Research</Button>
        <Button>Research</Button>
      </Flex>
      {/* Heading */}
      <Heading display="flex" justifyContent="center" alignItems="center">LaLaLand</Heading>
      {/* Card */}
      <Flex>
        <CardComp 
          img="https://via.placeholder.com/150"
          head="Heading"
          text="fsajfjsafjisafisajfasfijasjfijasofjasifafsiasfksfksafjasfsalfhiashfasflhasifhasifkasnsahfiasfaihfisafiasif"
        />

        <CardComp 
          img="https://via.placeholder.com/150"
          head="Heading"
          text="fsajfjsafjisafisajfasfijasjfijasofjasifafsiasfksfksafjasfsalfhiashfasflhasifhasifkasnsahfiasfaihfisafiasif"
        />

        <CardComp 
          img="https://via.placeholder.com/150"
          head="Heading"
          text="fsajfjsafjisafisajfasfijasjfijasofjasifafsiasfksfksafjasfsalfhiashfasflhasifhasifkasnsahfiasfaihfisafiasif"
        />
      </Flex>

      {/* ChatBox */}
      <Box >
        <GrAttachment />
      </Box>
    </Box>
  )
}

export default Home
