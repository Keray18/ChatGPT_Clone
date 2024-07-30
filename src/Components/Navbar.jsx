import { Button, Heading, Input } from '@chakra-ui/react'
import { FaPlus } from "react-icons/fa";
import React from 'react'

const Navbar = () => {
  return (
    <div>
    {/* # Search&chat */}
      <div>
        <Input />
        <div>
            <Button />
            <FaPlus />
        </div>
      </div>

      {/* # Menu */}
      <div>
        <div>
            <Heading>MENU</Heading>
        <div>
            History
        </div>

        <div>
            Collection
        </div>

        <div>
            Bin
        </div>
        <Heading>General</Heading>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
