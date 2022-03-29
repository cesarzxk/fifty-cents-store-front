import {
  IconButton,
  Text,
  Grid,
  GridItem,
  Button,
  Flex,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  Drawer,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
  Circle,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

import ItemCart from "../../Components/ItemCart";
import { useGlobal } from "../../Context/Global/GlobalContext";
import { useAuth } from "../../Context/Auth/AuthContext";

function Cart() {
  const { itemsCart, totalCartPrice, setItemsCart } = useGlobal();

  const { isLogued } = useAuth();
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  function removeItem(productId: string, locale: string) {
    const newItems = itemsCart.slice().filter((item) => {
      if (item.productId === productId && item.locale === locale) {
        return false;
      } else {
        return true;
      }
    });
    setItemsCart(newItems);
  }

  function setItemQuantity(productId: string, locale: string, value: number) {
    const newItems = itemsCart?.map((item) => {
      if (item.locale === locale && productId === item.productId) {
        return {
          productId: item.productId,
          name: item.name,
          locale: item.locale,
          price: (item.price / item.quantity) * value,
          quantity: value,
        };
      } else {
        return item;
      }
    });

    setItemsCart(newItems);
  }

  return (
    <Flex>
      <IconButton
        aria-label=""
        borderRadius={100}
        size="lg"
        bg="#000"
        onClick={() => onOpen()}
        data-testid="cartButton"
        icon={
          <>
            <Circle
              size="24px"
              bg="#ff0000"
              position="absolute"
              top="0"
              left="0"
            >
              <Text
                color="#ffffff"
                fontSize="14px"
                fontWeight="bold"
                data-testid="qtdpop"
              >
                {itemsCart?.length}
              </Text>
            </Circle>

            <MdOutlineShoppingCart size={25} color="yellow" />
          </>
        }
      />

      <Drawer onClose={onClose} isOpen={isOpen} size="lg">
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize="30px" fontWeight="bold">
            {`Carrinho`}
          </DrawerHeader>

          <DrawerBody>
            <Grid
              templateColumns="6fr 3fr 3fr 0fr"
              alignItems="start"
              maxH="70vh"
              overflowY="auto"
            >
              <GridItem fontWeight="bold" flex={6}>
                Itens
              </GridItem>

              <GridItem fontWeight="bold" flex={2}>
                Qtd
              </GridItem>

              <GridItem fontWeight="bold" flex={4}>
                Preço
              </GridItem>

              <GridItem fontWeight="bold" flex={4}></GridItem>
              {itemsCart?.map((item) => (
                <ItemCart
                  remove={removeItem}
                  key={item.productId}
                  properties={item}
                  setQuantity={setItemQuantity}
                />
              ))}
            </Grid>
          </DrawerBody>

          <HStack fontWeight="bold" marginY="2rem" marginX="2rem">
            <Button
              w="35%"
              colorScheme="yellow"
              isDisabled={isLogued == false}
              data-testid="checkout"
              onClick={() => {
                onClose();
                navigate("/checkout");
              }}
            >
              Fechar Pedido
            </Button>

            <Spacer />

            <Text>Total do pedido:</Text>

            <Text>R${totalCartPrice?.toFixed(2)}</Text>
          </HStack>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default Cart;
