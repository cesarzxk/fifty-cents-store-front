import { 
    PopoverBody, 
    Input, 
    HStack, 
    Text, 
    Button,
    Center,
    CircularProgress,
    FormControl
} from "@chakra-ui/react";
import { useState } from "react";
import Warnning from "../Warnning";


type loginProps ={
    onSubmit:(email:string, password:string)=> Promise<number>
}


function Login({onSubmit}:loginProps){
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [status, setStatus] = useState(0);

    const [emailIsNull, setEmailIsNull] = useState(false);
    const [passwordIsNull, setPasswordIsNull] = useState(false);

    
    async function handlerSubmit(e: React.FormEvent){
        e.preventDefault()
        setStatus(1)
        email=='' ?setEmailIsNull(true):setEmailIsNull(false)
        password==''?setPasswordIsNull(true):setPasswordIsNull(false)

        if(
            emailIsNull===false&&
            passwordIsNull===false
        ){
            const status = await onSubmit(email, password);
            console.log(status);
            setStatus(status);
        }else{
            setStatus(412)
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
            <Warnning 
            status={status} 
            setStatus={setStatus}/>
            <PopoverBody>
                <form onSubmit={handlerSubmit}>
                <HStack
                marginBottom='0.5rem'>
                    <Text
                    fontSize='12px'
                    fontWeight='bold'
                    fontFamily='M PLUS Rounded 1c' 
                    flex={1}>Email</Text>
                    <FormControl isInvalid={emailIsNull}>
                        <Input 
                        type='email'
                        flex={6}
                        placeholder='Digite seu email'
                        onChange={
                            (event)=>{
                                setEmail(event.target.value)
                            }
                        }
                        value={email}
                        />
                    </FormControl>
                </HStack>

                <HStack
                marginBottom='0.5rem'>
                    <Text  
                    fontWeight='bold'
                    fontSize='12px'
                    fontFamily='M PLUS Rounded 1c' 
                    flex={1}>
                        Senha
                    </Text>
                    <FormControl isInvalid={passwordIsNull}>
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
                    </FormControl>
                </HStack>

                <HStack>
                    <Button 
                    flex={1}
                    colorScheme='yellow'
                    title="Entrar"
                    type='submit'>
                        Entrar
                    </Button>
                </HStack>
                </form>
            </PopoverBody>
        </>
    );
}

export default Login;