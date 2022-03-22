} from '@chakra-ui/react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdArrowBack} from 'react-icons/md'
import {useLinkClickHandler} from 'react-router-dom';
import OrderCard from '../../Components/OrderCard';
function Orders() {
  const [items, setItems] = useState<orderType[]>()
  const [ordersLoadingStatus, setOrdersLoadingStatus] = useState(0)
  return (
    <Wrap
    justify='center'
    h='100%'
    w='70%'
    overflowY='hidden'
    overflowX='hidden'

    >
      <WrapItem 
      flexDirection='column'
      w='100%'
      >
        <HStack
        flexDir='row'
        bg='WindowFrame'
        w='100%'
        marginBottom='3rem'
        >
          <IconButton
          aria-label='' 
          borderRadius={0}
          h='100%'
          colorScheme='yellow'
          onClick={useLinkClickHandler('/')}
          icon={
            <MdArrowBack/>
          }/>
            <Text
            fontSize='30px'
            fontWeight='bold'
            marginLeft='1rem'
            fontFamily='Rounded Mplus 1c' 
            bg='WindowFrame'
            >Pedidos</Text>
          </HStack>

          <Accordion 
          allowToggle
          w='100%'
          maxH='70vh'
          overflowY='scroll'
          >
           
          {
          (ordersLoadingStatus==200) && items?.map((order:orderType)=>

            <OrderCard properties={order} />
          )
          }
          </Accordion>
        </WrapItem>
    </Wrap>
    
  );
}

export default Orders;
