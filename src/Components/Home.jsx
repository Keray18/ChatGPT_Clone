import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import { GrAttachment } from "react-icons/gr"
import CardComp from '../Scenes/CardComp'
import HomeCards from '../Scenes/HomeCards'
import HomeChat from '../Scenes/HomeChat'

const Home = () => {
  return (
    <Box  m="0.3rem" borderRadius="1.2rem 1.2rem 1.2rem 1.2rem" w="80%" h="90vh">
      {/* Buttons */}
      <Flex alignItems="center" h="10vh"  borderRadius="1rem 1rem 0rem 0rem" bg="rgba(128, 128, 128, 0.7)">
        <Button ml="1.3rem" fontSize="20px" w="12vw" h="5vh" borderRadius="2rem 2rem 2rem 2rem" bgGradient='linear(to-r, #0B5EF8, #7C9CD6)'  _hover={{ bgGradient: 'linear(to-r, #0B5EF8, #7C9CD6)' }} textColor="white">Research</Button>
        <Button mx="1.8rem" fontSize="20px" w="12vw" h="5vh" borderRadius="2rem 2rem 2rem 2rem">Research</Button>
        <Button fontSize="20px" w="12vw" h="5vh" borderRadius="2rem 2rem 2rem 2rem">Research</Button>
      </Flex>

      {/* Mid */}
      <Box bg="rgba(128, 128, 128, 0.5)" h="60vh">
        {/* Planner */}
        {/* <HomeCards /> */}

        {/* Chat */}
        {/* <HomeChat /> */}

        {/* Planner */}

      </Box>


      {/* ChatBox */}
      <Flex bgColor="white" borderRadius="0rem 0rem 1.2rem 1.2rem" h="20vh" justifyContent="center" alignItems="center">
        <Box>
          <Box bgColor="#5285E3" fontSize="2rem" p="1rem" m="0.8rem" borderRadius="0.5rem 0.5rem 0.5rem 0.5rem">
            <GrAttachment />
          </Box>
        </Box>
        <Input border="1px solid black" h="10vh" width="80%" bgColor="#FFFFFF" textColor="black" />
      </Flex>
      
    </Box>
  )
}

export default Home
