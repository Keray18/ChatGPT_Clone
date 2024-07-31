import { Box, Card, CardBody, CardHeader, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const CardComp = (props) => {
  return (
    <Card backgroundColor="transparent" mx="1rem" w="15vw">
      <Flex flexDirection="column" justify="center" alignItems="center">
        <CardHeader>
        <Image borderRadius={50} width="5rem" src={props.img} alt='img' />
        <Heading fontSize="20px">Heading</Heading>
      </CardHeader>

      <CardBody fontSize="10px">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ipsa repudiandae voluptatum delectus cumque fugit harum, dignissimos iusto autem numquam libero ipsum quaerat laborum, incidunt cupiditate nulla? Nisi, quibusdam tenetur?</p>
      </CardBody> 
      </Flex>
    </Card>
  )
}

export default CardComp
