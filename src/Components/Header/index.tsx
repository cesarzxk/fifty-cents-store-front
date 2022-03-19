import { 
    GridItem, 
    Img, 
    Flex, 
    Box, 
    Spacer
} from '@chakra-ui/react'
import Search from '../../Components/Search';
import Cart from '../../Components/Cart';
import User from '../../Components/User';


function Header(){
    

    return(
        
      <GridItem 
      bg="gray.300" 
      w='70%' 
      h='12rem'
      marginY='1rem'
      >
        <Flex>
          <Box>
            <Img 
            h='11rem' 
            src='./logo.svg'
            marginLeft='1rem'
            /> 
          </Box>

        

          <Spacer/>

          <Box 
          marginTop='1rem'
          marginRight='1rem'
          >
            <Search/>
          </Box>

          <Box 
          h='2.5rem'
          w='2.5rem'
          marginTop='0.8rem'
          marginRight='1rem'
          >
            <User/>
          </Box>

          <Box 
          h='2.5rem'
          w='2.5rem'
          marginTop='0.8rem'
          marginRight='1rem'
          >
            <Cart/>
          </Box>
        </Flex>
    </GridItem>
    )
}

export default Header