import {
    IconButton,
    Text,
    Grid,
    GridItem,
    Button,
    Flex,
    DrawerHeader,
    DrawerBody,
    DrawerOverlay,
    Drawer,
    DrawerContent,
    useDisclosure,
    DrawerCloseButton,
    Circle
} from '@chakra-ui/react';


import { useState } from 'react';
import {MdOutlineShoppingCart} from 'react-icons/md';
import ItemCart from '../../Components/ItemCart';

type itemType = {
    productId:number,
    locale: string,
    price: number,
    quantity:number
}

type orderType = {
    _id:String,
    items: itemType[],
    clientId:Number,
}



function Cart() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [items, setItems] =useState([
        {
            name:'banana',
            productId:'1',
            locale:'brazilian',
            price:2.80,
            quantity:2
        },
        { 
            productId:'2',
            locale:'brazilian',
            price:1000,
            quantity:2
        },
        {
            name:'limao',
            productId:'3',
            locale:'brazilian',
            price:2.80,
            quantity:2
        },
        {
            name:'tomate',
            productId:'4',
            locale:'brazilian',
            price:2.80,
            quantity:2
        },
        {
            name:'limao',
            productId:'3',
            locale:'brazilian',
            price:2.80,
            quantity:2
        },
        {
            name:'tomate',
            productId:'4',
            locale:'brazilian',
            price:2.80,
            quantity:2
        },
        {
            name:'limao',
            productId:'3',
            locale:'brazilian',
            price:2.80,
            quantity:2
        },
        {
            name:'tomate',
            productId:'4',
            locale:'brazilian',
            price:2.80,
            quantity:2
        },
        {
            name:'tomate',
            productId:'4',
            locale:'brazilian',
            price:2.80,
            quantity:2
        },
        {
            name:'tomate',
            productId:'4',
            locale:'brazilian',
            price:2.80,
            quantity:2
        },
        {
            name:'tomate',
            productId:'4',
            locale:'brazilian',
            price:2.80,
            quantity:2
        },
        {
            name:'tomate',
            productId:'4',
            locale:'brazilian',
            price:2.80,
            quantity:2
        },
        {
            name:'tomate',
            productId:'4',
            locale:'brazilian',
            price:2.80,
            quantity:2
        },
        {
            name:'tomate',
            productId:'4',
            locale:'brazilian',
            price:2.80,
            quantity:2
        },
        {
            name:'tomate',
            productId:'4',
            locale:'brazilian',
            price:2.80,
            quantity:2
        },
        {
            name:'tomate',
            productId:'4',
            locale:'brazilian',
            price:2.80,
            quantity:2
        }
    ])

    const itemslenght = useState(items.length)

    function removeItem(key:number){
        console.log(key)
        const newItems = items.slice();
        delete newItems[key];
        setItems(newItems)
    }

    function setItemQuantity(key:number, value:number){
        const newItems = items.slice();
        newItems[key] = {
            productId:items[key].productId,
            name:items[key].name,
            locale:items[key].locale,
            price:(items[key].price/items[key].quantity)*value,
            quantity:value
        };

        setItems(newItems)


        setItems(newItems)
    }

    const handleClick = () => {
        onOpen()
      }


  return (
    <Flex>
        <IconButton
        aria-label=''
        borderRadius={100}
        size='lg'
        bg='#000'
        onClick={handleClick}
        icon={
            <>
            <Circle
            size='24px'
            bg='#ff0000'
            position='absolute'
            top='0'
            left='0'
            >
            <Text
                color='#ffffff'
                fontSize='14px'
                fontWeight='bold'
                >{itemslenght}</Text>
            </Circle>
            <MdOutlineShoppingCart size={25} color='yellow' />
            </>
        }/>
       
            
        
           
    <Drawer onClose={onClose} isOpen={isOpen} size='lg'>
        <DrawerOverlay/>
        <DrawerContent>
        <DrawerCloseButton/>

        <DrawerHeader 
        fontSize='30px'
        fontWeight='bold'>{`Carrinho`}</DrawerHeader>

          <DrawerBody>
            <Grid templateColumns='6fr 3fr 3fr 0fr' 
            alignItems='start'
            maxH='70vh' 
            overflowY='scroll'>
        
                <GridItem fontWeight='bold' flex={6}>Itens</GridItem>
                <GridItem fontWeight='bold' flex={2}>Qtd</GridItem>
                <GridItem fontWeight='bold' flex={4}>Preço</GridItem>
                <GridItem fontWeight='bold' flex={4}></GridItem>
                
                {
                    items.map((item, index)=>
                        <ItemCart remove={removeItem} 
                        key={index.toString()} 
                        index={index} 
                        properties={item}
                        setQuantity={setItemQuantity}
                        />

                    )
                }
            </Grid>

        </DrawerBody>
        <Button 
        marginY='2rem'
        marginX='2rem'
        w='35%'
        colorScheme='yellow'>Fechar Pedido</Button>
        
        </DrawerContent>
        </Drawer>
    </Flex>

  );
  
}
export default Cart;
