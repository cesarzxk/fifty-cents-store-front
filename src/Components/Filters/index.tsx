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
import { useGlobal } from '../../Context/Global/GlobalContext'

function Filters() {
  const {
    filterCategory,
    filtersMaterial,
    setFiltersCategory,
    setFiltersMaterial
  } = useGlobal()

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

  function removeFilterCategory(filter:string){
    const newCategory = filterCategory.slice().filter((item)=> item !== filter);
    setFiltersCategory(newCategory)
  }

  function adicionarFilterCategory(filter:string){
    const newCategory = [filter, ...filterCategory]
    setFiltersCategory(newCategory)
  }

  function removeFilterMaterial(filter:string){
    const newMaterial = filtersMaterial.slice().filter((item)=> item !== filter);
    setFiltersMaterial(newMaterial)
  }

  function adicionarFilterMaterial(filter:string){
      const newMaterial = [filter, ...filtersMaterial]
      setFiltersMaterial(newMaterial)
  }

  
  return (
      <Box 
      w='25%'
      bg="gray.300"
      h='100%'
      >
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

            <Wrap 
            w='95%' 
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
                      onChange={(event)=>event.target.checked? 
                        adicionarFilterCategory(event.target.value):removeFilterCategory(event.target.value)}
                      value={category}
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
                      borderRadius={15}
                      onChange={(event)=>event.target.checked? 
                      adicionarFilterMaterial(event.target.value):removeFilterMaterial(event.target.value)}
                      value={material}
                      />
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
