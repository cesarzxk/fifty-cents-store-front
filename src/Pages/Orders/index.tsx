import {
  Accordion,
  Center,
  CircularProgress,
  Flex,
  HStack,
  IconButton,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdArrowBack } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import OrderCard from "../../Components/OrderCard";
import { useEffect, useState } from "react";
import { useGlobal } from "../../Context/Global/GlobalContext";
import useDimensions from "../../Hooks/useDimensions";
import Warnning from "../../Components/Warnning";

type itemsType = {
  productId: number;
  locale: string;
  price: number;
  quantity: number;
  name: string;
  _id: string;
};

type orderType = {
  _id?: string;
  items: itemsType[];
  clientId: number;
  data?: string;
  total: number;
};

function Orders() {
  const { getOrders } = useGlobal();
  const [items, setItems] = useState<orderType[]>();
  const [ordersLoadingStatus, setOrdersLoadingStatus] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    onload();
  }, []);

  async function onload() {
    const { data, status } = await getOrders();
    setOrdersLoadingStatus(status);
    setItems(data);
  }

  return !items ? (
    <>
      <Warnning
        status={ordersLoadingStatus}
        setStatus={setOrdersLoadingStatus}
      />
      <Center w="100%" flex={6}>
        <CircularProgress size="100px" isIndeterminate color="yellow" />
      </Center>
    </>
  ) : (
    <VStack px="1rem" w="100%" h="100%">
      <Warnning
        status={ordersLoadingStatus}
        setStatus={setOrdersLoadingStatus}
      />
      <HStack
        flexDir="row"
        bg="WindowFrame"
        w={{ base: "100%", md: "90%" }}
        marginBottom="1rem"
        marginTop="1rem"
      >
        <IconButton
          aria-label=""
          borderRadius={0}
          h="100%"
          colorScheme="yellow"
          onClick={() => navigate("/")}
          icon={<MdArrowBack />}
        />
        <Text
          fontSize="30px"
          fontWeight="bold"
          marginLeft="1rem"
          fontFamily="Rounded Mplus 1c"
          bg="WindowFrame"
          color="white"
        >
          Pedidos
        </Text>
      </HStack>

      <Wrap
        justify="center"
        h="85%"
        w={{ base: "100%", md: "90%" }}
        overflowY="auto"
        overflowX="hidden"
      >
        <WrapItem flexDirection="column" w="100%">
          <Flex w="100%">
            <Accordion allowToggle w="100%" overflowY="hidden">
              {ordersLoadingStatus == 200 &&
                items?.map((order: orderType) => (
                  <OrderCard key={order._id} properties={order} />
                ))}
            </Accordion>
          </Flex>
        </WrapItem>
      </Wrap>
    </VStack>
  );
}

export default Orders;
