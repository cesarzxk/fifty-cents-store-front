import {
    Avatar, 
    Popover, 
    PopoverTrigger, 
    PopoverContent, 
    PopoverCloseButton, 
    PopoverHeader,
    PopoverArrow,
    IconButton,
    Button,
    Text,
    HStack
} from '@chakra-ui/react'
import { useState } from 'react';
import Informations from '../../Components/Informations';

import Login from '../../Components/Login';
import Register from '../../Components/Register';


function User() {
    const [username, setUsername] = useState('seu nome')
    const [isLogued, setIsLogued] = useState(false) 

    const [isLogin, setIsLogin] = useState(true) 

  return (
    <Popover
    placement='bottom-start'
    >
        <PopoverTrigger>
             
            <IconButton
                aria-label=''
                borderRadius={100}
                h={47.988}
                w={47.988}
                bg='#000'
                icon={
                    <Avatar 
                    size='md'
                    bg='#000ff'
                    color='yellow'  
                    name={username}
                    src={isLogued? undefined:'./user.png'}
                    />
            }/>
        </PopoverTrigger>

        <PopoverContent>
            <PopoverArrow/>
            <PopoverCloseButton/>
            <PopoverHeader>
                <HStack marginRight='1.5rem'>
                    
                    
                    {isLogued?
                        (<Text fontFamily='M PLUS Rounded 1c'>Bem-vindo {username}!</Text>)
                        :
                        isLogin?
                            (   
                                <>
                                    <Text 
                                    flex={1}
                                    fontWeight='bold'
                                    fontFamily='M PLUS Rounded 1c'>Logar {username}</Text>
                                    <Button 
                                    colorScheme='red'
                                    onClick={()=>setIsLogin(!isLogin)}
                                    >Criar conta</Button>
                                </>
                            )
                                :
                                (
                                    <>
                                        <Text 
                                        flex={1}
                                        fontWeight='bold'
                                        fontFamily='M PLUS Rounded 1c'>Criar conta {username}</Text>
                                        <Button 
                                        colorScheme='red'
                                        onClick={()=>setIsLogin(!isLogin)}
                                        >Logar</Button>
                                    </>
                                )
                    }
                   
                </HStack>
               

            </PopoverHeader>
            
            {
            isLogued?
               (<Informations/>)
                :
                isLogin?
                    (<Login/>)
                    :
                    (<Register/>)
            }

        </PopoverContent>
    </Popover>
  );
}

export default User;
