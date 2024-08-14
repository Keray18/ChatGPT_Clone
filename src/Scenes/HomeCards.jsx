import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import CardComp from './CardComp'

const HomeCards = () => {
  return (
    <Box>
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
  )
}

export default HomeCards
