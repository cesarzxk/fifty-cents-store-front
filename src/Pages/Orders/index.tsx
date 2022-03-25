
import {
  Accordion,
  Center,
  CircularProgress,
  Flex,
  HStack,
  IconButton,
  Text,
  Wrap,
  WrapItem,

} from '@chakra-ui/react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdArrowBack } from 'react-icons/md'

import { useNavigate } from 'react-router-dom';
import OrderCard from '../../Components/OrderCard';
import { useEffect, useState } from 'react';
import { useGlobal } from '../../Context/Global/GlobalContext';
import useDimensions from '../../Hooks/useDimensions';
import Warnning from '../../Components/Warnning';

type itemsType = {
  productId: number,
  locale: string,
  price: number,
  quantity: number,
  name: string,
  _id: string
}

type orderType = {
  _id?: string,
  items: itemsType[],
  clientId: number,
  data?: string
}


function Orders() {
  const { getOrders } = useGlobal()
  const [items, setItems] = useState<orderType[]>()
  const [ordersLoadingStatus, setOrdersLoadingStatus] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    onload()
  },
    [])


  async function onload() {
    const { data, status } = await getOrders()
    setOrdersLoadingStatus(status)
    setItems(data)
    
  }

  const dimensions = useDimensions()

  function switchWidth() {
    if (dimensions.width >= 1366) {
      return '70%'
    } else {
      return '100%'
    }
  }

  return !items ?
    (
      <>
        <Warnning status={ordersLoadingStatus} setStatus={setOrdersLoadingStatus} />
        <Center
          w='100%'
          flex={6}>
          <CircularProgress
            size='100px'
            isIndeterminate
            color='yellow' />
        </Center>
      </>
    )
    :
    (
      <>
        <Warnning status={ordersLoadingStatus} setStatus={setOrdersLoadingStatus} />
        <Wrap
          justify='center'
          h='100%'
          w={switchWidth()}
          overflowY='hidden'
          overflowX='hidden'>


          <WrapItem
            flexDirection='column'
            w='100%'>

            <HStack
              flexDir='row'
              bg='WindowFrame'
              w='100%'
              marginBottom='1rem'>

              <IconButton
                aria-label=''
                borderRadius={0}
                h='100%'
                colorScheme='yellow'
                onClick={() => navigate('/')}
                icon={
                  <MdArrowBack />
                } />
              <Text
                fontSize='30px'
                fontWeight='bold'
                marginLeft='1rem'
                fontFamily='Rounded Mplus 1c'
                bg='WindowFrame'>
                Pedidos
              </Text>
            </HStack>
            <Flex
              overflowY='hidden'
              h='60%'
              w='100%'
            >
              <Accordion
                allowToggle
                w='100%'
                overflowY='scroll'
              >
                {
                  (ordersLoadingStatus == 200) && items.map(
                    (order: orderType) =>
                      <OrderCard key={order._id} properties={order} />
                  )
                }
              </Accordion>
            </Flex>
          </WrapItem>
        </Wrap>
      </>
    );
}

export default Orders;
