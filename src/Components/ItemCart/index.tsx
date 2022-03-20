import { 
    Box, 
    Button, 
    GridItem, 
    HStack, 
    IconButton, 
    NumberDecrementStepper, 
    NumberIncrementStepper, 
    NumberInput, 
    NumberInputField, 
    NumberInputStepper, 
    Spacer, 
    Text} from "@chakra-ui/react";

import { FaTrash } from 'react-icons/fa'

import { FunctionTypeNode } from "typescript";

interface propertiesType{
    name:string;
    locale: string;
    price: number;
    quantity:number;
            
}


function ItemCart({properties, remove, index, setQuantity}:{
    properties:propertiesType, 
    remove:(key:number)=>void,
    setQuantity:(key:number, value:number)=>void,
    index:number

}){
    
    return(
        <>
        <GridItem
        flex={4}
        >{properties.name}</GridItem>

        
        <GridItem
        >
            <NumberInput size='xs' 
            w='4.1rem'
            max={100}
            defaultValue={properties.quantity}
            onChange={(value)=> setQuantity(index, parseInt(value))} 
            min={1}>
                <NumberInputField />
                <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </GridItem>
        
        <GridItem
        flex={1}
        >{(properties.price).toFixed(2)}</GridItem>

        <GridItem>
            <IconButton 
            aria-label=""
            icon={<FaTrash/>}
            onClick={()=>{remove(index)}}
             />
        </GridItem>
        </>

        
    )

}

export default ItemCart;