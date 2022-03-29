import {
  Wrap,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CircularProgress,
  Center,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";

import { useGlobal } from "../../Context/Global/GlobalContext";
import useDimensions from "../../Hooks/useDimensions";

function Checkout() {
  const navigate = useNavigate();
  const { setOrder, setItemsCart } = useGlobal();
  const [status, setStatus] = useState(0);
  const {width} = useDimensions()
  const [currentType, setCurrentType] = useState<
    "error" | "info" | "warning" | "success"
  >();
  const [currentMsg, setCurrentMsg] = useState<string>("");
  const [currentTitle, setCurrentTitle] = useState<string>("");

  useEffect(() => {
    executeOrder();
  }, []);

  async function executeOrder() {
    const curretStatus = await setOrder();
    if (curretStatus === 200) {
      setItemsCart([]);
      switchStatus(200);
      return setStatus(200);
    }
    switchStatus(curretStatus);
    return setStatus(curretStatus);
  }

  const statusList = {
    200: {
      type: "success" as "success",
      title: "Compra realizada!",
      msg: "Compra realizada com sucesso!",
    },

    409: {
      type: "warning" as "warning",
      title: "Sem autorização para isso!",
      msg: "Por favor Entre com uma conta valida!",
    },

    404: {
      type: "error" as "error",
      title: "Carrinho vazio!",
      msg: "Por favor adicione items ao seu carrinho!",
    },
    500: {
      type: "error" as "error",
      title: "Erro Interno!",
      msg: "Por favor Reiniciar o servidor!",
    },
  };

  function switchStatus(currentStatus: number) {
    switch (currentStatus) {
      case 200:
        setCurrentType(statusList[200].type);
        setCurrentMsg(statusList[200].msg);
        setCurrentTitle(statusList[200].title);
        break;

      case 409:
        setCurrentType(statusList[409].type);
        setCurrentMsg(statusList[409].msg);
        setCurrentTitle(statusList[409].title);
        break;

      case 404:
        setCurrentType(statusList[404].type);
        setCurrentMsg(statusList[404].msg);
        setCurrentTitle(statusList[404].title);
        break;

      case 500:
        setCurrentType(statusList[500].type);
        setCurrentMsg(statusList[500].msg);
        setCurrentTitle(statusList[500].title);
        break;
    }
  }

  return status == 0 ? (
    <Center w="100%" flex={6}>
      <CircularProgress size="100px" isIndeterminate color="yellow" />
    </Center>
  ) : (
    <Wrap
      justify="center"
      w={width <= 1000?"70%":"100%"}
      h="95%"
      overflowY="hidden"
      overflowX="hidden"
    >
      <Alert
        status={currentType}
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        h="85vh"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          {currentTitle}
        </AlertTitle>

        <AlertDescription maxWidth="sm">{currentMsg}</AlertDescription>
        <br />
        <Button
          onClick={() => navigate("/")}
          colorScheme={status == 200 ? "green" : "red"}
        >
          Retornar para o inicio!
        </Button>
      </Alert>
    </Wrap>
  );
}

export default Checkout;
