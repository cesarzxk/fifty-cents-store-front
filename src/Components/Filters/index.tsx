import {
  VStack, 
  Switch, 
  Wrap, 
  WrapItem, 
  Center, 
  Text, 
  Spacer, 
  Box
} from '@chakra-ui/react'

function Filters() {

  const categorys = [
    "Awesome",
    "Ergonomic",
    "Fantastic",
    "Generic",
    "Gorgeous",
    "Handcrafted",
    "Handmade",
    "Incredible",
    "Intelligent",
    "Licensed",
    "Practical",
    "Refined",
    "Rustic",
    "Sleek",
    "Small",
    "Tasty",
    "Unbranded",
  ]

  const materials = [
    "Concrete",
    "Cotton",
    "Fresh",
    "Frozen",
    "Granite",
    "Metal",
    "Plastic",
    "Rubber",
    "Soft",
    "Steel",
    "Wooden"
  ]
  

  return (
      <Box 
      w='25%'
      bg="gray.300"
      h='100%'>
        <Text 
        fontWeight='bold' 
        fontFamily='M PLUS Rounded 1c' 
        fontSize={25} 
        marginLeft={1}
        >Filters</Text>
        
        <VStack
        borderRadius='md'
        >
            <Text
            fontWeight='700' 
            fontFamily='M PLUS Rounded 1c' 
            >Categoria</Text>

            <Wrap w='95%' 
            align='center' 
            justify='center'
            borderRadius='md'
            >
              {categorys.map(category=>
                  <WrapItem w='45%'>
                    <Center flex={1} h='25px'>
                      <Text fontFamily='M PLUS Rounded 1c' fontWeight='400' fontSize='12px' >{category}</Text>
                      <Spacer/>
                      <Switch colorScheme='yellow' 
                      size='md' 
                      border='1px solid rgb(255, 190, 7)'
                      borderRadius={15}
                      />
                    </Center>
                  </WrapItem>
                  
                  )}
            </Wrap>

            <Text
            fontWeight='700' 
            fontFamily='M PLUS Rounded 1c' 
            >Material</Text>

            <Wrap w='95%' 
            align='center' 
            justify='center'
            borderRadius='md'
            >
              {materials.map(material=>
                  <WrapItem w='45%'>
                    <Center flex={1} h='25px'>
                      <Text fontFamily='M PLUS Rounded 1c' fontWeight='400' fontSize='12px'>{material}</Text>
                      <Spacer/>
                      <Switch colorScheme='yellow' 
                      size='md' 
                      border='1px solid rgb(255, 190, 7)'
                      borderRadius={15}/>
                    </Center>
                  </WrapItem>
                  
                  )}
            </Wrap>
            <Spacer/>
        </VStack>
        </Box>
      
  );
}

export default Filters;
