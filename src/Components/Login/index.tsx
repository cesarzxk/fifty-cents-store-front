import { PopoverBody, Input, HStack, Text, Button} from "@chakra-ui/react";
import { useState } from "react";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <PopoverBody>
            <HStack
            marginBottom='0.5rem'
            >
                <Text
                fontSize='12px'
                fontWeight='bold'
                fontFamily='M PLUS Rounded 1c' 
                 flex={1}>Email</Text>
                <Input 
                type='email'
                flex={6}
                onChange={(event)=>{setEmail(event.target.value)}}
                value={email}
                />
            </HStack>

            <HStack
            marginBottom='0.5rem'>
                <Text  
                fontWeight='bold'
                fontSize='12px'
                fontFamily='M PLUS Rounded 1c' 
                flex={1}>Senha</Text>
                <Input  
                type='password'
                flex={6}
                onChange={(event)=>{setPassword(event.target.value)}}
                value={password}
                />
            </HStack>

            <HStack>
                <Button 
                flex={1}
                colorScheme='yellow'
                title="Entrar">
                    Entrar
                </Button>
            </HStack>
        </PopoverBody>
    );
}