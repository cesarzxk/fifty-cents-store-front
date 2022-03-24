
import { 
  Box, 
  Circle, 
  Flex, 
  Grid, 
  GridItem, 
  IconButton, 
  Image, 
  Spacer, 
  Text, 
  Wrap, 
  WrapItem
} from '@chakra-ui/react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {MdAddShoppingCart, MdArrowBack} from 'react-icons/md'
import {useLinkClickHandler, useParams} from 'react-router-dom';
import { useGlobal } from '../../Context/Global/GlobalContext';
import { useEffect, useState } from 'react';


function Item() {
  
  let { slug } = useParams<"slug">();
  const {getItem, addItemtoCart} = useGlobal()
  const [item, setItem] = useState<any>({})

  useEffect(()=>{
    onload()
  },
    [])


  async function onload() {
    if(slug){
        const [id, locale] = slug.split("-")
        console.log(id)
        const data = await getItem(locale, id)
        setItem(data)
        console.log(item)
    }
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
          onClick={useLinkClickHandler('/')}
          icon={
            <MdArrowBack/>
          }/>
          1

          <Text
          fontSize='30px'
          fontWeight='bold'
          marginLeft='1rem'
          fontFamily='Rounded Mplus 1c' 
          bg='WindowFrame'
          flex={1}
          >{item?.name}</Text>
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
            item.images?.map((image:string) => {
              return <Image src={image}/>;
            })
            }
          </Carousel>

          {
            item.hasDiscount&&
                <Image 
                position='absolute'
                maxH='5rem' 
                src='/sale.png'/>
          }

          <Flex 
          w='20rem' 
          h='12.5rem' 
          justifyContent='center'
          flexDir='column'
          >
            <Grid gridTemplateColumns='1fr 1fr'>
              <GridItem><Text>Cod:</Text></GridItem>
              <GridItem><Text fontFamily='Rounded Mplus 1c'>{item?.id + '-' + item?.locale}</Text></GridItem>

              <GridItem><Text fontFamily='Rounded Mplus 1c' >Categoria:</Text></GridItem>
              <GridItem><Text fontFamily='Rounded Mplus 1c' >{item?.category}</Text></GridItem>

              <GridItem><Text fontFamily='Rounded Mplus 1c' >Material:</Text></GridItem>
              <GridItem><Text fontFamily='Rounded Mplus 1c' >{item?.material}</Text></GridItem>
            </Grid>

            <Flex
              marginTop='1rem'
              flexDir='row'
              ><Text
              fontWeight='bold'
              fontSize='25px'
              fontFamily='Rounded Mplus 1c' 
              >{item?.price}</Text>
            
              {
                item?.hasDiscount&&
                  <Circle
                  bg='red'
                  borderRadius='20px'
                  color='#fff'
                  size='22px'
                  fontSize='12px'
                  fontFamily='Rounded Mplus 1c' 
                  >-{parseInt(item?.discountValue)*100}%</Circle>
              }

            </Flex>
            
            <Spacer/>

            <IconButton 
            aria-label=''
            colorScheme={item.hasDiscount?'red':'yellow'}
            color={item.hasDiscount?'white':'black'}
            h='3.5rem'
            onClick={()=>{
              addItemtoCart({
                locale: item.locale,
                name:item.name,
                price: parseFloat(item.price), 
                productId:item.id,
                quantity:1,
              })
            }}
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
            >{item?.description}</Text>
          </Box>
        </WrapItem>
        </Wrap>
    </Box>
  );
}

export default Item;
