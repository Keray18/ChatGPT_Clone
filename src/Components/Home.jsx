import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import { GrAttachment } from "react-icons/gr"
import CardComp from '../Scenes/CardComp'

const Home = () => {
  return (
    <Box border="1px solid red" m="0.3rem" borderRadius="1.2rem 1.2rem 1.2rem 1.2rem" w="80%" h="90vh">
      {/* Buttons */}
      <Flex alignItems="center" h="10vh" border="1px solid red" borderRadius="1rem 1rem 0rem 0rem" bg="rgba(128, 128, 128, 0.5)">
        <Button ml="1.3rem" fontSize="20px" w="12vw" h="5vh" borderRadius="2rem 2rem 2rem 2rem" bgGradient='linear(to-r, #0B5EF8, #7C9CD6)'  _hover={{ bgGradient: 'linear(to-r, #0B5EF8, #7C9CD6)' }} textColor="white">Research</Button>
        <Button mx="1.8rem" fontSize="20px" w="12vw" h="5vh" borderRadius="2rem 2rem 2rem 2rem">Research</Button>
        <Button fontSize="20px" w="12vw" h="5vh" borderRadius="2rem 2rem 2rem 2rem">Research</Button>
      </Flex>
      <Box>
        {/* Heading */}
      <Heading display="flex" justifyContent="center" alignItems="center">LaLaLand</Heading>
      {/* Card */}
      <Flex justifyContent="center" alignItems="center">
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

      </Box>
      {/* ChatBox */}
      <Flex>
        <GrAttachment />
        <Input bgColor="#FFFFFF" textColor="black" />
      </Flex>
    </Box>
  )
}

export default Home
