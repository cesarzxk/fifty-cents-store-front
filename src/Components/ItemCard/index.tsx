import { Badge, Box, Image } from "@chakra-ui/react";
import useDimensions from "../../Hooks/useDimensions";

type item = {
  hasDiscount: boolean;
  name: string;
  images: string[];
  description: string;
  price: string;
  discountValue: string;
  material: string;
  category: string;
  id: string;
  locale: string;
};

function ItemCard({ property }: { property: item }) {
  const dimensions = useDimensions();
  function switchWidth() {
    if (dimensions.width >= 700) {
      return "13rem";
    } else {
      return "90%";
    }
  }

  return (
    <Box
      data-testid="container"
      maxW={switchWidth()}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={property.images[0]} alt={property.name} />

      <Box p="2">
        <Box display="flex" alignItems="baseline">
          {property.hasDiscount && (
            <Badge borderRadius="full" px="2" colorScheme="red">
              sale {parseFloat(property.discountValue) * 100}%
            </Badge>
          )}

          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="10px"
            textTransform="uppercase"
          >
            &nbsp; {property.material} &bull; {property.category}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.name}
        </Box>

        <Box>
          R${property.price}
          <Box as="span" color="gray.600" fontSize="sm">
            /u
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default ItemCard;
