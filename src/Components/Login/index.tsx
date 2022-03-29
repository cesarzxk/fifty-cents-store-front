import {
  Input,
  HStack,
  Text,
  Button,
  Center,
  CircularProgress,
  FormControl,
} from "@chakra-ui/react";
import { useState } from "react";
import Warnning from "../Warnning";

type loginProps = {
  onSubmit: (email: string, password: string) => Promise<number>;
};

function Login({ onSubmit }: loginProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState<number>(0);

  async function handlerSubmit(e: React.FormEvent) {
    e.preventDefault();

    setStatus(1);

    if (email != "" && password != "") {
      const resultStatus = await onSubmit(email, password);
      setStatus(resultStatus);
    } else {
      setStatus(412);
    }
  }

  return status == 1 ? (
    <Center w="100%" h="10rem">
      <CircularProgress
        data-testid="circularProgress"
        size="50px"
        isIndeterminate
        color="yellow"
      />
    </Center>
  ) : (
    <>
      <Warnning status={status} setStatus={setStatus} />
      <form onSubmit={handlerSubmit}>
        <HStack marginBottom="0.5rem">
          <Text
            fontSize="12px"
            fontWeight="bold"
            fontFamily="M PLUS Rounded 1c"
            flex={1}
          >
            Email
          </Text>

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
          <Text
            fontWeight="bold"
            fontSize="12px"
            fontFamily="M PLUS Rounded 1c"
            flex={1}
          >
            Senha
          </Text>

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

        <HStack>
          <Button flex={1} colorScheme="yellow" title="Entrar" type="submit">
            Entrar
          </Button>
        </HStack>
      </form>
    </>
  );
}

export default Login;
