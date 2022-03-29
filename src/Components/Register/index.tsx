import {
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
  password: string;
  name: string;
  lastname: string;
  email: string;
}

type RegisterProps = {
  onSubmit: (user: accountType) => Promise<number>;
};

function Register({ onSubmit }: RegisterProps) {
  const [name, setName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatedPassword, setRepeatedPassword] = useState<string>("");

  const [status, setStatus] = useState(0);

  const [haveError, sethaveError] = useState(false);

  async function handlerSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(1);

    if (
      name != "" &&
      lastname != "" &&
      email != "" &&
      password != "" &&
      repeatedPassword == password
    ) {
      sethaveError(false);
      const result = await onSubmit({
        email: email,
        lastname: lastname,
        name: name,
        password: password,
      });
      setStatus(result);
    } else {
      setStatus(412);
      sethaveError(true);
    }
  }
  return status == 1 ? (
    <Center w="100%" h="10rem">
      <CircularProgress size="50px" isIndeterminate color="yellow" />
    </Center>
  ) : (
    <>
      <Warnning status={status} setStatus={setStatus} />
      <form onSubmit={handlerSubmit}>
        <FormControl isInvalid={haveError}>
          <HStack marginBottom="0.5rem">
            <FormLabel
              fontSize="12px"
              fontWeight="bold"
              fontFamily="M PLUS Rounded 1c"
              flex={1}
            >
              Nome:
            </FormLabel>

            <Input
              type="name"
              flex={6}
              data-testid="name"
              placeholder="Digite seu nome"
              onChange={(event) => {
                setName(event.target.value);
              }}
              value={name}
            />
          </HStack>

          <HStack marginBottom="0.5rem">
            <FormLabel
              fontSize="12px"
              fontWeight="bold"
              fontFamily="M PLUS Rounded 1c"
              flex={1}
            >
              Sobrenome:
            </FormLabel>

            <Input
              type="lastname"
              flex={6}
              data-testid="lastname"
              placeholder="Digite seu sobrenome"
              onChange={(event) => {
                setLastname(event.target.value);
              }}
              value={lastname}
            />
          </HStack>

          <HStack marginBottom="0.5rem">
            <FormLabel
              fontSize="12px"
              fontWeight="bold"
              fontFamily="M PLUS Rounded 1c"
              flex={1}
            >
              Email:
            </FormLabel>
            <Input
              type="email"
              flex={6}
              data-testid="email"
              placeholder="Digite seu email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              value={email}
            />
          </HStack>

          <HStack marginBottom="0.5rem">
            <FormLabel
              fontWeight="bold"
              fontSize="12px"
              fontFamily="M PLUS Rounded 1c"
              flex={1}
            >
              Senha:
            </FormLabel>

            <Input
              type="password"
              flex={6}
              data-testid="password"
              placeholder="Digite sua senha"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              value={password}
            />
          </HStack>

          <HStack marginBottom="0.5rem">
            <FormLabel
              fontWeight="bold"
              fontSize="12px"
              fontFamily="M PLUS Rounded 1c"
              flex={1}
            >
              Repita:
            </FormLabel>

            <Input
              type="password"
              flex={6}
              data-testid="rePassword"
              placeholder="Repita sua senha"
              onChange={(event) => {
                setRepeatedPassword(event.target.value);
              }}
              value={repeatedPassword}
            />
          </HStack>

          <FormErrorMessage>Todos campos são necessários!</FormErrorMessage>

          <HStack>
            <Button type="submit" flex={1} colorScheme="yellow" title="Entrar">
              Registrar
            </Button>
          </HStack>
        </FormControl>
      </form>
    </>
  );
}

export default Register;
