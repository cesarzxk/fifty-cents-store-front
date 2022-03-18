import { Grid, GridItem, Img, Flex, Box, Spacer, Button, Avatar} from '@chakra-ui/react'


function App() {
  return (
    <Grid 
    templateColumns='1fr'
    h='100vh'
    w='100vw'
    alignItems='center'
    display='flex'
    flexDirection='column'
    >
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
          display='flex' 
          flexDirection='row'
          marginTop='1rem'
          marginRight='1rem'
          >
          </Box>

          <Box 
          h='2.5rem'
          w='2.5rem'
          marginTop='0.8rem'
          marginRight='1rem'
          >
          </Box>
          

        </Flex>
        
      </GridItem>

      <GridItem 
      h='100%'
      w='70%'>

        <Flex 
        flexDirection='row'
        h='100%'
        >
          <Box 
          flex={1}
          bg="gray.300"
          h='100%'
          >
          </Box>

          <Box 
          flex={3}
          h='100%'
          overflowY='scroll'

          >
          
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default App;
