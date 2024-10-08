import {
  Box,
  Circle,
  Flex,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Image,
  Spacer,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdAddShoppingCart, MdArrowBack } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

import { useGlobal } from "../../Context/Global/GlobalContext";
import { useGetProducts } from "../../Hooks/useGetProducts";
import { Loading } from "../../Components/Loading";

function Item() {
  let { slug } = useParams<"slug">();
  const { addItemtoCart } = useGlobal();
  const navigate = useNavigate();
  const [id, locale] = slug?.split("-") || ["", ""];
  const { data: item, isLoading } = useGetProducts({ id, locale });

  // useEffect(() => {
  //   onload();
  // }, []);

  // async function onload() {
  //   if (slug) {
  //     const data = await getItem(locale, id);
  //     setItem(data);
  //     console.log(data);
  //   }
  // }

  return !item ? (
    <Loading />
  ) : (
    <Flex height="100%" overflowX="auto" flex={6} justifyContent="center">
      <VStack w="90%">
        <HStack w="100%" bg="WindowFrame" marginTop="2rem" marginBottom="3rem">
          <IconButton
            aria-label=""
            height="100%"
            borderRadius={0}
            colorScheme="yellow"
            onClick={() => navigate("/")}
            icon={<MdArrowBack />}
          />

          <Text
            fontSize="30px"
            fontWeight="bold"
            marginLeft="1rem"
            fontFamily="Rounded Mplus 1c"
            color="white"
          >
            {item?.name}
          </Text>
        </HStack>

        <Wrap w="100%" justify="center">
          <Flex width={{ base: "100%", md: "300px" }}>
            <Carousel width="100%" infiniteLoop>
              {item.images?.map((image: string) => {
                return <Image src={image} />;
              })}
            </Carousel>
            {item.hasDiscount && (
              <Image position="absolute" maxH="5rem" src="/sale.png" />
            )}
          </Flex>
          <Spacer maxWidth="1rem" />

          <Flex
            w={{ base: "100%", md: "20rem" }}
            h="12.5rem"
            justifyContent="center"
            flexDir="column"
          >
            <Grid gridTemplateColumns="1fr 1fr">
              <GridItem>
                <Text>Cod:</Text>
              </GridItem>

              <GridItem>
                <Text fontFamily="Rounded Mplus 1c">
                  {item?.id + "-" + item?.locale}
                </Text>
              </GridItem>

              <GridItem>
                <Text fontFamily="Rounded Mplus 1c">Categoria:</Text>
              </GridItem>

              <GridItem>
                <Text fontFamily="Rounded Mplus 1c">{item?.category}</Text>
              </GridItem>

              <GridItem>
                <Text fontFamily="Rounded Mplus 1c">Material:</Text>
              </GridItem>

              <GridItem>
                <Text fontFamily="Rounded Mplus 1c">{item?.material}</Text>
              </GridItem>
            </Grid>

            <HStack marginTop="1rem">
              <Text
                fontWeight="bold"
                fontSize="25px"
                fontFamily="Rounded Mplus 1c"
              >
                R${item?.price}
              </Text>

              {item?.hasDiscount && (
                <Circle
                  bg="red"
                  borderRadius="20px"
                  color="#fff"
                  size="22px"
                  fontSize="12px"
                  fontFamily="Rounded Mplus 1c"
                >
                  -{parseFloat(item.discountValue) * 100}%
                </Circle>
              )}
            </HStack>

            <Spacer />

            <IconButton
              aria-label=""
              colorScheme={item.hasDiscount ? "red" : "yellow"}
              color={item.hasDiscount ? "white" : "black"}
              h="3.5rem"
              onClick={() => {
                addItemtoCart({
                  locale: item.locale,
                  name: item.name,
                  price: parseFloat(item.price),
                  productId: item.id,
                  quantity: 1,
                });
              }}
              icon={
                <>
                  <Text marginRight="1rem" fontFamily="Rounded Mplus 1c">
                    Adicionar ao carrinho
                  </Text>
                  <MdAddShoppingCart size="35" />
                </>
              }
            />
          </Flex>
        </Wrap>
        <Box>
          <Text fontSize="25px" fontWeight="bold" fontFamily="Rounded Mplus 1c">
            Sobre o produto
          </Text>

          <Text fontFamily="Rounded Mplus 1c">{item?.description}</Text>
          <br />
          <br />
        </Box>
      </VStack>
    </Flex>
  );
}

export default Item;
