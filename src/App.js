import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <ChakraProvider>
        <Navbar />
      </ChakraProvider>
    </div>
  );
}

export default App;
