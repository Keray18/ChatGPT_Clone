import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home'


function App() {
  const styles = {
    backgroundImage: "url('/assets/Rectangle 24.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', 
    width: '100%', 
  };

  return (
    <Box style={styles} overflowY="hidden">
      <ChakraProvider>
        <Flex m="1rem">
          <Navbar />
          <Home />
        </Flex>
      </ChakraProvider>
    </Box> 
  );
}

export default App;
