import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import { GrAttachment } from "react-icons/gr"
import CardComp from '../Scenes/CardComp'

const Home = () => {
  return (
    <Box border="1px solid red" m="0.3rem" borderRadius="1.2rem 1.2rem 1.2rem 1.2rem" w="80%" h="90vh">
      {/* Buttons */}
      <Flex alignItems="center" h="10vh" border="1px solid red" borderRadius="1rem 1rem 0rem 0rem" bg="rgba(128, 128, 128, 0.7)">
        <Button ml="1.3rem" fontSize="20px" w="12vw" h="5vh" borderRadius="2rem 2rem 2rem 2rem" bgGradient='linear(to-r, #0B5EF8, #7C9CD6)'  _hover={{ bgGradient: 'linear(to-r, #0B5EF8, #7C9CD6)' }} textColor="white">Research</Button>
        <Button mx="1.8rem" fontSize="20px" w="12vw" h="5vh" borderRadius="2rem 2rem 2rem 2rem">Research</Button>
        <Button fontSize="20px" w="12vw" h="5vh" borderRadius="2rem 2rem 2rem 2rem">Research</Button>
      </Flex>

      
      <Box bg="rgba(128, 128, 128, 0.5)" h="60vh">
        {/* Heading */}
      <Heading display="flex" justifyContent="center" alignItems="center" py="2rem" fontWeight="semibold" fontSize="3rem">Welcome</Heading>
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
      <Flex bgColor="white" borderRadius="0rem 0rem 1rem 1rem" border="1px solid black" h="20vh" justifyContent="center" alignItems="center">
        <GrAttachment />
        <Input h="10vh" width="80%" bgColor="#FFFFFF" textColor="black" _focus={{ outline: "none" }} />
      </Flex>
      
    </Box>
  )
}

export default Home
