import {
  VStack,
  Switch,
  Wrap,
  WrapItem,
  Text,
  Spacer,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useGlobal } from "../../Context/Global/GlobalContext";
import { BsSortDown, BsSortDownAlt } from "react-icons/bs";

function Filters() {
  const {
    filtersCategory,
    filtersMaterial,
    setFiltersCategory,
    setFiltersMaterial,
    setSort,
    sort,
  } = useGlobal();

  const materials = [
    "Concrete",
    "Cotton",
    "Fresh",
    "Frozen",
    "Granite",
    "Metal",
    "Plastic",
    "Rubber",
    "Soft",
    "Steel",
    "Wooden",
  ];

  const categorys = [
    "Awesome",
    "Ergonomic",
    "Fantastic",
    "Generic",
    "Gorgeous",
    "Handcrafted",
    "Handmade",
    "Incredible",
    "Intelligent",
    "Licensed",
    "Practical",
    "Refined",
    "Rustic",
    "Sleek",
    "Small",
    "Tasty",
    "Unbranded",
  ];

  function removeFilterCategory(filter: string) {
    const newCategory = filtersCategory
      .slice()
      .filter((item) => item !== filter);
    setFiltersCategory(newCategory);
  }

  function adicionarFilterCategory(filter: string) {
    const newCategory = [filter, ...filtersCategory];
    setFiltersCategory(newCategory);
  }

  function removeFilterMaterial(filter: string) {
    const newMaterial = filtersMaterial
      .slice()
      .filter((item) => item !== filter);
    setFiltersMaterial(newMaterial);
  }

  function adicionarFilterMaterial(filter: string) {
    const newMaterial = [filter, ...filtersMaterial];
    setFiltersMaterial(newMaterial);
  }

  return (
    <Flex
      bg="gray.300"
      h="100%"
      flex="2"
      borderRadius="lg"
      justifyContent="center"
      overflowY="auto"
    >
      <VStack w="95%" marginTop="1rem">
        <Text
          fontWeight="bold"
          fontFamily="M PLUS Rounded 1c"
          fontSize={25}
          alignSelf="start"
        >
          Filters
        </Text>

        <Text fontWeight="700" fontFamily="M PLUS Rounded 1c">
          Preço
        </Text>

        <Flex flexDirection="row" gap="10%">
          <Button
            onClick={() => {
              setSort("bigger");
            }}
            data-testid="biggerButtom"
            disabled={sort == "bigger"}
          >
            <BsSortDown size={34} />
          </Button>

          <Button
            onClick={() => {
              setSort("smaller");
            }}
            data-testid="smallerButtom"
            disabled={sort == "smaller"}
          >
            <BsSortDownAlt size={34} />
          </Button>
        </Flex>

        <Text fontWeight="700" fontFamily="M PLUS Rounded 1c">
          Categoria
        </Text>

        <Wrap borderRadius="md" justify="center">
          {categorys.map((category) => (
            <WrapItem key={category} w="45%" h="25px">
              <Text
                fontFamily="M PLUS Rounded 1c"
                fontWeight="400"
                fontSize="12px"
              >
                {category}
              </Text>

              <Spacer />

              <Switch
                data-testid={category}
                colorScheme="yellow"
                size="md"
                border="1px solid rgb(255, 190, 7)"
                borderRadius={15}
                defaultChecked={
                  filtersCategory?.indexOf(category) != -1 && true
                }
                onChange={(event) =>
                  event.target.checked
                    ? adicionarFilterCategory(event.target.value)
                    : removeFilterCategory(event.target.value)
                }
                value={category}
              />
            </WrapItem>
          ))}
        </Wrap>

        <Text fontWeight="700" fontFamily="M PLUS Rounded 1c">
          Material
        </Text>

        <Wrap borderRadius="md" justify="center">
          {materials.map((material) => (
            <WrapItem key={material} w="45%" h="25px">
              <Text
                fontFamily="M PLUS Rounded 1c"
                fontWeight="400"
                fontSize="12px"
              >
                {material}
              </Text>

              <Spacer />

              <Switch
                data-testid={material}
                colorScheme="yellow"
                size="md"
                border="1px solid rgb(255, 190, 7)"
                borderRadius={15}
                defaultChecked={
                  filtersMaterial?.indexOf(material) != -1 && true
                }
                onChange={(event) =>
                  event.target.checked
                    ? adicionarFilterMaterial(event.target.value)
                    : removeFilterMaterial(event.target.value)
                }
                value={material}
              />
            </WrapItem>
          ))}
        </Wrap>
        <Spacer />
      </VStack>
    </Flex>
  );
}

export default Filters;
