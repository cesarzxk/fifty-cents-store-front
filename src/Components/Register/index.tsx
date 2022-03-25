import { 
    PopoverBody, 
    Input, 
    HStack,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    CircularProgress,
    Center,

} from "@chakra-ui/react";

import { useState } from "react";
import Warnning from "../Warnning";


interface accountType {
    password:string,
    name:string,
    lastname:string,
    email:string,
}

type RegisterProps ={
    onSubmit:(user:accountType) => Promise<number>
}

function Register({onSubmit}:RegisterProps){
    const [name, setName] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repeatedPassword, setRepeatedPassword] = useState<string>('');

    const [status, setStatus] = useState(0);

    const [nameIsNull, setNameIsNull]= useState(false);
    const [lastnameIsNull, setLastnameIsNull] = useState(false);
    const [emailIsNull, setEmailIsNull] = useState(false);
    const [passwordIsNull, setPasswordIsNull] = useState(false);
    const [repeatedPasswordIsNull, setRepeatedPasswordIsNull] = useState(false);

    const [haveError, sethaveError] = useState(false);


    async function handlerSubmit(e: React.FormEvent){
        e.preventDefault()
        setStatus(1)
        name==''?setNameIsNull(true):setNameIsNull(false)
        lastname==''?setLastnameIsNull(true):setLastnameIsNull(false)
        email=='' ?setEmailIsNull(true):setEmailIsNull(false)
        password==''?setPasswordIsNull(true):setPasswordIsNull(false)
        repeatedPassword==''?setRepeatedPasswordIsNull(true):setRepeatedPasswordIsNull(false)

        if(
            nameIsNull===false &&
            lastnameIsNull===false&&
            emailIsNull===false&&
            passwordIsNull===false&&
            repeatedPasswordIsNull===false
        ){
            sethaveError(false)
            console.log(email)
            console.log(lastname)
            console.log(password)
            console.log(name)
            const result = await onSubmit({
                    email:email,
                    lastname:lastname,
                    name:name,
                    password:password
                })
            setStatus(result)
                
        }else{
            setStatus(412)
            sethaveError(true)
        }
    }

    return status==1?
    (
    <Center 
    w='100%'
    h='10rem'>
        <CircularProgress 
        size='50px' 
        isIndeterminate 
        color='yellow'/>
    </Center>
    )
    :
    (
        <>
            <Warnning status={status} setStatus={setStatus}/>
            
            <PopoverBody>
                <form onSubmit={(e)=>handlerSubmit(e)}>
                    <FormControl isInvalid={haveError}>
                        <FormControl isInvalid={nameIsNull}>
                            <HStack marginBottom='0.5rem'>
                                <FormLabel 
                                fontSize='12px'
                                fontWeight='bold'
                                fontFamily='M PLUS Rounded 1c' 
                                flex={1}>
                                    Nome:
                                </FormLabel >

                                <Input 
                                type='name'
                                flex={6}
                                placeholder='Digite seu nome'
                                onChange={
                                    (event)=>{
                                        setName(event.target.value)
                                    }
                                }
                                value={name}
                                
                                />
                            </HStack>
                        </FormControl>

                        <FormControl isInvalid={lastnameIsNull}>
                        <HStack marginBottom='0.5rem'>
                            <FormLabel 
                            fontSize='12px'
                            fontWeight='bold'
                            fontFamily='M PLUS Rounded 1c' 
                            flex={1}>
                                Sobrenome:
                            </FormLabel>

                            <Input  
                            type='lastname'
                            flex={6}
                            placeholder='Digite seu sobrenome'
                            onChange={(event)=>{
                                setLastname(event.target.value)
                                }
                            }
                            value={lastname}/>
                        </HStack>
                        </FormControl>

                        <FormControl isInvalid={emailIsNull}>
                        <HStack marginBottom='0.5rem'>

                            <FormLabel 
                            fontSize='12px'
                            fontWeight='bold'
                            fontFamily='M PLUS Rounded 1c' 
                            flex={1}>
                                Email:
                            </FormLabel>
                            <Input 
                            type='email'
                            flex={6}
                            placeholder='Digite seu email'
                            onChange={
                                (event)=>{
                                    setEmail(event.target.value)
                                }
                            }
                            value={email}/>
                        </HStack>
                        </FormControl>

                        <FormControl isInvalid={passwordIsNull}>
                        <HStack marginBottom='0.5rem'>
                            <FormLabel   
                            fontWeight='bold'
                            fontSize='12px'
                            fontFamily='M PLUS Rounded 1c' 
                            flex={1}>
                                Senha:
                            </FormLabel>

                            <Input  
                            type='password'
                            flex={6}
                            placeholder='Digite sua senha'
                            onChange={
                                (event)=>{
                                    setPassword(event.target.value)
                                }
                            }
                            value={password}/>
                        </HStack>
                        </FormControl>

                        <FormControl isInvalid={repeatedPasswordIsNull}>
                            <HStack marginBottom='0.5rem'>
                                <FormLabel   
                                fontWeight='bold'
                                fontSize='12px'
                                fontFamily='M PLUS Rounded 1c' 
                                flex={1}>
                                    Repita:
                                </FormLabel>

                                <Input  
                                type='password'
                                flex={6}
                                placeholder='Repita sua senha'
                                onChange={
                                    (event)=>{
                                        setRepeatedPassword(event.target.value)
                                    }
                                }
                                value={repeatedPassword}/>
                            </HStack>
                        </FormControl>
                        
                        <FormErrorMessage>
                            Todos campos são necessários!
                        </FormErrorMessage>

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

export default Register;