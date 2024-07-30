import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react'
import { FaPlus, FaHistory } from "react-icons/fa";
import React from 'react'

const Navbar = () => {
  return (
    <Box p="2rem">
    {/* # Search&chat */}
      <Flex flexDirection="column">
        <Input bgColor="#FFFFFF" textColor="black"/>
        <Button>
            <FaPlus />
            <Text>New Chat</Text>
        </Button>
      </Flex>

      {/* # Menu */}
      <Box>
        <Heading>MENU</Heading>
        <Text display="flex" alignItems="center">
          <FaHistory />
            History
        </Text>

        <Text>
            Collection
        </Text>

        <Text>
            Bin
        </Text>
          <Heading>General</Heading>

          <Text>
            Settings
          </Text>
        </Box>
        
    </Box>
  )
}

export default Navbar
