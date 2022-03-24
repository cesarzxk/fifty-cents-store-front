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
import { useAuth } from '../../Context/Auth/AuthContext';


function User() {
    const [isLogin, setIsLogin] = useState(true);
    const {userInfo, handlerLogin, handlerRegister, handlerLogout, isLogued} = useAuth();
    

    return (
        <Popover>
            <PopoverTrigger>
                <IconButton
                    onPointerDownCapture={(event)=>console.log(event)}
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
                        name={`${userInfo?.name} ${userInfo?.lastname}`}
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
                            (<Text fontFamily='M PLUS Rounded 1c'>Bem-vindo {userInfo?.name}!</Text>)
                            :
                            isLogin?
                                (   
                                    <>
                                        <Text 
                                        flex={1}
                                        fontWeight='bold'
                                        fontFamily='M PLUS Rounded 1c'>Logar</Text>

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
                                        fontFamily='M PLUS Rounded 1c'>Criar conta</Text>

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
                (<Informations onSubmit={handlerLogout} userInfo={userInfo}/>)
                    :
                    isLogin?
                        (<Login onSubmit={handlerLogin}/>)
                        :
                        (<Register onSubmit={handlerRegister}/>)
                }

            </PopoverContent>
        </Popover>
    );
}

export default User;
