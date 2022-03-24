import { 
    Button,
    VStack,
    PopoverBody,
    Text,
    Grid,
    GridItem
    } from "@chakra-ui/react";
import { Link } from "react-router-dom";


type userInfoType = {
    name:string,
    lastname:string,
    email:string
}

export default function Informations({userInfo, onSubmit}:{userInfo:userInfoType|undefined, onSubmit:()=>void;}){
    
    return(
    <PopoverBody>
        <VStack>
            <Grid templateColumns='3fr 1fr'>
                <GridItem>Nome:</GridItem>
                <GridItem>{userInfo?.name}</GridItem>
                <GridItem>Sobrenome:</GridItem>
                <GridItem>{userInfo?.lastname}</GridItem>
                <GridItem>Email:</GridItem>
                <GridItem>{userInfo?.email}</GridItem>
            </Grid>
            
            <Link to='/orders'>
                <Text textDecoration='underline'
                fontWeight='bold'
                >Pedidos</Text>
            </Link>

            <Button
            w='100%'
            colorScheme='red'
            onClick={onSubmit}
            >Sair</Button>
        </VStack>
    </PopoverBody>
    );
}