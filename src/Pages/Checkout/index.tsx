
import { 
    Wrap, 
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription
  
  } from '@chakra-ui/react';
import { useEffect, useLayoutEffect, useState } from 'react';
  
  import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useGlobal } from '../../Context/Global/GlobalContext';
 
  function Checkout() {
      const {setOrder, setItemsCart} = useGlobal()
      const [status, setStatus] = useState(0)

      useEffect(()=>{
        executeOrder()
      }, [])

      async function executeOrder() {
        const curretStatus = await setOrder()
        if(curretStatus == 200){
            setItemsCart([])

        }

        setStatus(curretStatus)
      }

    
  
    return (
      <Wrap
      justify='center'
      w='70%'
      h='95%'
      overflowY='hidden'
      overflowX='hidden'>

          <Alert
            status='success'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            h='85vh'
            >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                    Compra completada com sucesso!
                </AlertTitle>
                <AlertDescription maxWidth='sm'>
                   O pedido foi realizado com sucesso! 
                   Obrigado e volte sempre!
                </AlertDescription>
            </Alert>
       
      </Wrap>
    );
  }
  
  export default Checkout;
  