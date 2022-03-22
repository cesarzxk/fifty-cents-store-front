import { 
    PopoverBody, 
    Input, 
    HStack,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,

} from "@chakra-ui/react";

import { useState } from "react";
import Warnning from "../Warnning";


interface accountType {
    password:string,
    name:string,
    lastname:string,
    email:string,
}


    

export default function Register({onSubmit}:{onSubmit:(user:accountType) => Promise<number>,}){
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');
    const [status, setStatus] = useState(0);

    const [nameIsNull, setNameIsNull]= useState(false);
    const [lastnameIsNull, setLastnameIsNull] = useState(false);
    const [emailIsNull, setEmailIsNull] = useState(false);
    const [passwordIsNull, setPasswordIsNull] = useState(false);
    const [repeatedPasswordIsNull, setRepeatedPasswordIsNull] = useState(false);

    const [haveError, sethaveError] = useState(false);


    async function handlerSubmit(e: React.FormEvent){
        e.preventDefault()
        name==='' ? setNameIsNull(true):setNameIsNull(false)
        lastname==='' ? setLastnameIsNull(true): setLastnameIsNull(false)
        email==='' ? setEmailIsNull(true): setEmailIsNull(false)
        password==='' ?setPasswordIsNull(true): setPasswordIsNull(false)
        repeatedPassword==='' ?setRepeatedPasswordIsNull(true): setRepeatedPasswordIsNull(false)

        if(
            nameIsNull===false &&
            lastnameIsNull===false&&
            emailIsNull===false&&
            passwordIsNull===false&&
            repeatedPasswordIsNull===false
        ){
            sethaveError(false)
            const result = await onSubmit({
                    email:email,
                    lastname:lastname,
                    name:name,
                    password:password
                })
            setStatus(result)
                

        }else{
            sethaveError(true)
        }
    }

    return(
        <>
        <Warnning status={status} setStatus={setStatus}/>
        
        <PopoverBody >
            <form onSubmit={(e)=>handlerSubmit(e)}>
                <FormControl isInvalid={haveError}>
                    <FormControl isInvalid={nameIsNull}>
                    <HStack
                    marginBottom='0.5rem'
                    >
                        <FormLabel 
                        fontSize='12px'
                        fontWeight='bold'
                        fontFamily='M PLUS Rounded 1c' 
                        flex={1}>Nome:</FormLabel >

                        <Input 
                        type='name'
                        flex={6}
                        placeholder='Digite seu nome'
                        onChange={(event)=>{setName(event.target.value)}}
                        value={name}
                        
                        />
                    </HStack>
                    </FormControl>

                    <FormControl isInvalid={lastnameIsNull}>
                    <HStack
                    marginBottom='0.5rem'
                    >
                        <FormLabel 
                        fontSize='12px'
                        fontWeight='bold'
                        fontFamily='M PLUS Rounded 1c' 
                        flex={1}>Sobrenome:</FormLabel>
                        <Input  
                        type='lastname'
                        flex={6}
                        placeholder='Digite seu sobrenome'
                        onChange={(event)=>{setLastname(event.target.value)}}
                        value={lastname}
                        
                        />
                    </HStack>
                    </FormControl>

                    
                    <FormControl isInvalid={emailIsNull}>
                    <HStack
                    marginBottom='0.5rem'
                    >
                        <FormLabel 
                        fontSize='12px'
                        fontWeight='bold'
                        fontFamily='M PLUS Rounded 1c' 
                        flex={1}>Email:</FormLabel>
                        <Input 
                        type='email'
                        flex={6}
                        placeholder='Digite seu email'
                        onChange={(event)=>{setEmail(event.target.value)}}
                        value={email}
                        
                        />
                    </HStack>
                    </FormControl>

                    <FormControl isInvalid={passwordIsNull}>
                    <HStack
                    marginBottom='0.5rem'>
                        <FormLabel   
                        fontWeight='bold'
                        fontSize='12px'
                        fontFamily='M PLUS Rounded 1c' 
                        flex={1}>Senha:</FormLabel>
                        <Input  
                        type='password'
                        flex={6}
                        placeholder='Digite sua senha'
                        onChange={(event)=>{setPassword(event.target.value)}}
                        value={password}
                        
                        />
                    </HStack>
                    </FormControl>

                    <FormControl isInvalid={repeatedPasswordIsNull}>
                        <HStack
                        marginBottom='0.5rem'>
                            <FormLabel   
                            fontWeight='bold'
                            fontSize='12px'
                            fontFamily='M PLUS Rounded 1c' 
                            flex={1}>Repita:</FormLabel>
                            <Input  
                            type='password'
                            flex={6}
                            placeholder='Repita sua senha'
                            onChange={(event)=>{setRepeatedPassword(event.target.value)}}
                            value={repeatedPassword}
                            
                            />
                        </HStack>
                    </FormControl>
                    
                    <FormErrorMessage>Todos campos são necessários!</FormErrorMessage>

                    <FormControl>
                        <HStack>
                            <Button 
                            type='submit'
                            flex={1}
                            colorScheme='yellow'
                            title="Entrar">
                                Registrar
                            </Button>
                        </HStack>
                    </FormControl>
                </FormControl>
            </form>
        </PopoverBody>
    </>
    );
}