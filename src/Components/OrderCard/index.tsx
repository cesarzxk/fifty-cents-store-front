import { 
    AccordionButton, 
    AccordionIcon, 
    AccordionItem, 
    AccordionPanel, 
    GridItem, 
    HStack, 
    Text,
    Grid
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

type itemsType= {
    productId: number,
    locale: string,
    price: number,
    quantity: number,
    name: string,
    _id: string
}

type propertiesType = {
    _id?: string,
    items: itemsType[],
    clientId: number,
    data?: string,
}




function OrderCard({properties}:{properties:propertiesType}){
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        count()
    },[])

    function count(){
        properties.items.map(({price})=>setTotal(total+price))
    }
    
    const data = new Date(String(properties.data))
    return(
        <AccordionItem>
            <h2>
                <AccordionButton h='4rem'>
                        <HStack flex={1} textAlign='left'>
                            <Text flex={3}>
                                <b>Pedido Numero: </b>{properties._id} 
                            </Text>
                            
                            <Text flex={1}>
                                <b>Hora: </b>{data.getMinutes()}:{data.getHours()} 
                            </Text>
                            
                            <Text flex={1}>
                                 <b>Data: </b>  {data.getDay()}/{ data.getMonth()}/{data.getFullYear()}
                            </Text>
                        </HStack>
                    <AccordionIcon />
            </AccordionButton>
            </h2>

        <AccordionPanel pb={4}>
        <Grid templateColumns='4fr 3fr 1fr'>
        
                <GridItem fontWeight='bold'>Nome</GridItem>
                <GridItem fontWeight='bold'>Quantidade</GridItem>
                <GridItem fontWeight='bold'>Preço</GridItem>
                {
                properties.items.map((item)=>
                    
                    <>
                        
                        <GridItem>
                            {item.name}
                        </GridItem>

                        <GridItem>
                            {item.quantity}
                        </GridItem>
                        
                        <GridItem>
                            {(item.price).toFixed(2)}
                        </GridItem>
                    </>
                    )
                }

                <GridItem fontWeight='bold'>Total</GridItem>
                <GridItem fontWeight='bold'></GridItem>
                <GridItem fontWeight='bold'>{total.toFixed(2)}</GridItem>
            
            </Grid>
            
          
        
        </AccordionPanel>
      </AccordionItem>
    )
}
export default OrderCard;