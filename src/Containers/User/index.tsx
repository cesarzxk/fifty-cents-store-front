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
  HStack,
  PopoverBody,
} from "@chakra-ui/react";
import { useState } from "react";

import Informations from "../../Components/Informations";
import Login from "../../Components/Login";
import Register from "../../Components/Register";
import { useAuth } from "../../Context/Auth/AuthContext";

function User() {
  const [isLogin, setIsLogin] = useState(true);
  const { userInfo, handlerLogin, handlerRegister, handlerLogout, isLogued } =
    useAuth();

  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          aria-label=""
          borderRadius={30}
          bg="black"
          icon={
            <Avatar
              w="2.5rem"
              h="2.5rem"
              bg="black"
              color="yellow"
              data-testis="avatar"
              name={`${userInfo?.name} ${userInfo?.lastname}`}
              src={isLogued ? undefined : "./user.png"}
            />
          }
        />
      </PopoverTrigger>

      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <HStack marginRight="1.5rem">
            {isLogued ? (
              <Text fontFamily="M PLUS Rounded 1c">
                Bem-vindo {userInfo?.name}!
              </Text>
            ) : isLogin ? (
              <>
                <Text flex={1} fontWeight="bold" fontFamily="M PLUS Rounded 1c">
                  Logar
                </Text>

                <Button colorScheme="red" onClick={() => setIsLogin(!isLogin)}>
                  Criar conta
                </Button>
              </>
            ) : (
              <>
                <Text flex={1} fontWeight="bold" fontFamily="M PLUS Rounded 1c">
                  Criar conta
                </Text>

                <Button colorScheme="red" onClick={() => setIsLogin(!isLogin)}>
                  Logar
                </Button>
              </>
            )}
          </HStack>
        </PopoverHeader>
        <PopoverBody>
          {isLogued ? (
            <Informations onSubmit={handlerLogout} userInfo={userInfo} />
          ) : isLogin ? (
            <Login onSubmit={handlerLogin} />
          ) : (
            <Register onSubmit={handlerRegister} />
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default User;
