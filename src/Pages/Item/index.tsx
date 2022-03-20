
import { Box, Circle, Flex, Grid, GridItem, IconButton, Image, Spacer, Text, Wrap, WrapItem} from '@chakra-ui/react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {MdAddShoppingCart, MdArrowBack} from 'react-icons/md'

import {useLinkClickHandler} from 'react-router-dom';


function Item() {
  const item = {
      hasDiscount: true,
      name: 'Rear view of modern home with pool',
      images: ['https://bit.ly/2Z4KKcF', 'https://bit.ly/2Z4KKcF'],
      description: 'Modern home in city center in the heart of historic Los Angeles',
      price: '$1,900.00',
      discountValue:'0.05',
      material: 'concrete',
      category: 'Fantastic',
      id: '1',
      locale:'brazilian'
    }

  return (
    <Box 
    overflowY='scroll'
    paddingLeft='1rem'
    height='100%'
    flex={4}
    >
      <Wrap
      justify='center'
      overflowX='hidden'
      height='100%'
      width='100%'
      >
      <WrapItem 
      flexDirection='column'
      alignItems='center'
      >

        <Flex
        flexDir='row'
        w='40rem'
        bg='WindowFrame'
        marginTop='2rem'
        marginBottom='3rem'
        >
          <IconButton
          aria-label=''
          height='100%' 
          borderRadius={0}
          colorScheme='yellow'
          onClick={useLinkClickHandler('/home')}
          icon={
            <MdArrowBack/>
          }/>
          

          <Text
          fontSize='30px'
          fontWeight='bold'
          marginLeft='1rem'
          fontFamily='Rounded Mplus 1c' 
          bg='WindowFrame'
          flex={1}
          >{item.name}</Text>
        </Flex>


        <Flex
        flexDir='row'
        gap='1rem'
        >
          <Carousel 
          width='300px'
          infiniteLoop
          >
            {
            item.images.map((image:string) => {
              return <Image src={image}/>;
            })
            }
          </Carousel>

          {
            item.hasDiscount&&
                <Image 
                position='absolute'
                maxH='5rem' 
                src='./sale.png'/>
          }

          <Flex 
          w='20rem' 
          h='12.5rem' 
          justifyContent='center'
          flexDir='column'
          >
            <Grid gridTemplateColumns='1fr 1fr'>
              <GridItem><Text>Cod:</Text></GridItem>
              <GridItem><Text fontFamily='Rounded Mplus 1c'>{item.id + '-' + item.locale}</Text></GridItem>

              <GridItem><Text fontFamily='Rounded Mplus 1c' >Categoria:</Text></GridItem>
              <GridItem><Text fontFamily='Rounded Mplus 1c' >{item.category}:</Text></GridItem>

              <GridItem><Text fontFamily='Rounded Mplus 1c' >Material:</Text></GridItem>
              <GridItem><Text fontFamily='Rounded Mplus 1c' >{item.material}</Text></GridItem>
            </Grid>

            <Flex
              marginTop='1rem'
              flexDir='row'
              ><Text
              fontWeight='bold'
              fontSize='25px'
              fontFamily='Rounded Mplus 1c' 
              >{item.price}</Text>
            
              {
                item.hasDiscount&&
                  <Circle
                  bg='red'
                  borderRadius='20px'
                  color='#fff'
                  size='22px'
                  fontSize='12px'
                  fontFamily='Rounded Mplus 1c' 
                  >-{parseInt(item.discountValue)*100}%</Circle>
              }

            </Flex>
            
            <Spacer/>

            <IconButton 
            aria-label=''
            colorScheme={item.hasDiscount?'red':'yellow'}
            color={item.hasDiscount?'white':'black'}
            h='3.5rem'
            icon={
            <>
              <Text
              marginRight='1rem'
              fontFamily='Rounded Mplus 1c' 
              >Adicionar ao carrinho</Text>
              <MdAddShoppingCart size='35'/>
            </>
            }/>
            
          </Flex>
          </Flex>

          <Box
          w='40rem'>
            <Text
            fontSize='25px'
            fontWeight='bold'
            fontFamily='Rounded Mplus 1c' 
            >Sobre o produto</Text>

            <Text
            fontFamily='Rounded Mplus 1c' 
            >{item.description}</Text>
          </Box>
        </WrapItem>
        </Wrap>
    </Box>
  );
}

export default Item;
