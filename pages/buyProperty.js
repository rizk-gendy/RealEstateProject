import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex  ,Box,Icon,Text} from "@chakra-ui/react";
import {BsFilter} from 'react-icons/bs'


const buy =()=>{
  
   const[searchFilters ,setSearchFilters ] =useState(false);
   const router = useRouter();

   return(
       <Box>
           <Flex
            cursor="pointer"
            bg="gray.100"

           >
               <Text>Hello</Text>
           </Flex>
       </Box>
   )
}


export default buy;