import { Avatar, Box, Text } from '@chakra-ui/react'
import React from 'react'

const HomeChat = () => {
  return (
    <Box>
        {/* Question */}
        <Box py="2rem">
        <Box borderRadius="1rem 1rem 1rem 1rem" display="flex" justifyContent="center" alignItems="center" mx="5rem" bgColor="white" textColor="black" p="2rem">
            <Avatar w="3.5vw" h="6.5vh" src='none' mr="1rem" />
            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, suscipit. Eos voluptate iure, hic eligendi tempore et. Harum officia tempora a ab maxime, quae, atque quo nobis architecto ipsum id!</Text>
        </Box>
        </Box>

        {/* Answer */}
        <Box>
        <Box borderRadius="1rem 1rem 1rem 1rem" display="flex" justifyContent="center" alignItems="center" mx="5rem" bgColor="white" textColor="black" p="2rem">
            <Avatar w="3.5vw" h="6.5vh" src='none' mr="1rem" />
            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, suscipit. Eos voluptate iure, hic eligendi tempore et. Harum officia tempora a ab maxime, quae, atque quo nobis architecto ipsum id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore possimus officiis voluptatibus similique perspiciatis eveniet! Harum architecto quis asperiores natus? Modi corrupti, odit officia voluptatibus facilis vel quibusdam? Enim, debitis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet quasi, inventore ab, quia velit debitis pariatur itaque ratione, esse eaque. Aliquid, veniam. Mollitia ex obcaecati animi earum enim veniam.</Text>
        </Box>
        </Box>
    </Box>
  )
}

export default HomeChat
