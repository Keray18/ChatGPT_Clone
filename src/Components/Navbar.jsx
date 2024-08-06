import { Avatar, Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react'
import { FaPlus, FaHistory } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";
import { MdOutlineSettings } from "react-icons/md";
import { TbStack } from "react-icons/tb";
import React from 'react'

const Navbar = () => {
  return (
    <Box p="2rem">
    {/* # Search&chat */}
      <Flex flexDirection="column">
        <Input bgColor="#FFFFFF" textColor="black" height="10%" _focus={{ outline: "none", boxShadow: "none" }} />
        <Button my="2rem" bgGradient='linear(to-r, #0B5EF8, #7C9CD6)'  _hover={{ bgGradient: 'linear(to-r, #0B5EF8, #7C9CD6)' }} textColor="white" w="10vw">
            <FaPlus fontSize="1.3rem" />
            <Text fontSize="20px" mx="0.3rem">New Chat</Text>
        </Button>
      </Flex>

      {/* # Menu */}
      <Box>
        <Heading fontSize="30px" pt="1rem">Menu</Heading>
        <Text display="flex" alignItems="center" my="1.5rem">
          <FaHistory />
            <Box px="0.5rem" fontWeight="semibold" fontSize="18px">History</Box>
        </Text>

        <Text display="flex" alignItems="center" my="1.5rem">
          <TbStack fontSize="1.2rem"/>
          <Box px="0.5rem" fontWeight="semibold" fontSize="18px">Collection</Box>
        </Text>

        <Text display="flex" alignItems="center" my="1.5rem">
          <RiDeleteBin7Line />
            <Box px="0.5rem" fontWeight="semibold" fontSize="18px">Bin</Box>
        </Text>
          <Heading fontSize="30px" mt="2rem">General</Heading>

          <Text display="flex" alignItems="center" my="1.5rem">
            <MdOutlineSettings />
            <Box px="0.5rem" fontWeight="semibold" fontSize="18px">Settings</Box>
          </Text>
        </Box>

        <Box display="flex" alignItems="center" pt="1.5rem">
          <Avatar w="2vw" h="4vh" src='none' />
          <Box mx="0.5rem" backgroundColor="white" textColor="black" borderRadius="0.5rem 0.5rem 0.5rem 0.5rem">
            <Heading fontSize="20px" p="0.3rem">Keshav Bahoray</Heading>
            
            {/* <p>Welcome to Chat</p> */}
          </Box>
        </Box>
        
    </Box>
  )
}

export default Navbar
