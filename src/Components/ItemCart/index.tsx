import {
  GridItem,
  IconButton,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

import { FaTrash } from "react-icons/fa";

interface propertiesType {
  name: string;
  locale: string;
  price: number;
  quantity: number;
  productId: string;
}

function ItemCart({
  properties,
  setQuantity,
  remove,
}: {
  properties: propertiesType;
  remove: (productId: string, locale: string) => void;
  setQuantity: (productId: string, locale: string, value: number) => void;
}) {
  return (
    <>
      <GridItem flex={4}>{properties.name}</GridItem>

      <GridItem>
        <NumberInput
          size="xs"
          w="4.1rem"
          max={100}
          defaultValue={properties.quantity}
          onChange={(value) =>
            setQuantity(
              properties.productId,
              properties.locale,
              parseInt(value)
            )
          }
          min={1}
          data-testid="quantityInput"
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </GridItem>

      <GridItem flex={1}>{properties.price.toFixed(2)}</GridItem>

      <GridItem>
        <IconButton
          data-testid="removeButton"
          aria-label=""
          icon={<FaTrash />}
          onClick={() => {
            remove(properties.productId, properties.locale);
          }}
        />
      </GridItem>
    </>
  );
}

export default ItemCart;
