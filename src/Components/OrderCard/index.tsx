import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  GridItem,
  HStack,
  Text,
  Grid,
  Accordion,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

type itemsType = {
  productId: number;
  locale: string;
  price: number;
  quantity: number;
  name: string;
  _id: string;
};

type propertiesType = {
  _id?: string;
  items: itemsType[];
  clientId: number;
  data?: string;
  total: number;
};

function OrderCard({ properties }: { properties: propertiesType }) {
  const [total, setTotal] = useState(0);

  const data = new Date(String(properties.data));
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton h="5rem">
            <HStack flex={1} textAlign="left">
              <Text flex={3}>
                <b>Pedido Numero: </b>
                {properties._id}
              </Text>

              <Text flex={1}>
                <b>Hora: </b>
                {data.getHours().toString().padStart(2, "0")}:
                {data.getUTCMinutes().toString().padStart(2, "0")}
              </Text>

              <Text flex={1}>
                <b>Data: </b>
                {data.toLocaleDateString()}
              </Text>
            </HStack>
            <AccordionIcon />
          </AccordionButton>
        </h2>

        <AccordionPanel maxH="10rem" overflowY="auto">
          <Grid templateColumns="4fr 3fr 1fr">
            <GridItem fontWeight="bold">Nome</GridItem>
            <GridItem fontWeight="bold">Quantidade</GridItem>
            <GridItem fontWeight="bold">Preço</GridItem>
          </Grid>

          {properties.items.map((item, index) => (
            <Grid key={item._id} templateColumns="4fr 3fr 1fr">
              <GridItem>{item.name}</GridItem>
              <GridItem>{item.quantity}</GridItem>
              <GridItem>{item.price.toFixed(2)}</GridItem>
            </Grid>
          ))}

          <Grid templateColumns="4fr 3fr 1fr">
            <GridItem fontWeight="bold">Total</GridItem>
            <GridItem fontWeight="bold"></GridItem>
            <GridItem fontWeight="bold">{properties.total.toFixed(2)}</GridItem>
          </Grid>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
export default OrderCard;
