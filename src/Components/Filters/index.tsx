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
import { useParams } from "react-router-dom";

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

  let { slug } = useParams<"slug">();

  return (
    <Flex
      bg="#333232"
      h="100%"
      flex="1"
      minW="16.625rem"
      justifyContent="normal"
      overflowY="auto"
      color="#fff"
      p="1%"
      flexDir="column"
      gap="2rem"
    >
      {!slug && (
        <>
          <Text
            fontWeight="bold"
            fontFamily="M PLUS Rounded 1c"
            fontSize={25}
            alignSelf="start"
          >
            Filters
          </Text>
          <VStack gap="0.5rem">
            <Text fontWeight="700" fontFamily="M PLUS Rounded 1c">
              Preço
            </Text>

            <Flex
              flexDirection="row"
              gap="0.5rem"
              w="100%"
              justifyContent="center"
            >
              <Button
                onClick={() => {
                  setSort("bigger");
                }}
                data-testid="biggerButtom"
                color="white"
                isDisabled={sort === "bigger"}
                bgColor="black"
                gap="0.5rem"
                h="2rem"
              >
                <BsSortDown size={25} color="rgb(255, 190, 7)" />
                <Text>Maior</Text>
              </Button>

              <Button
                onClick={() => {
                  setSort("smaller");
                }}
                data-testid="smallerButtom"
                color="white"
                isDisabled={sort === "smaller"}
                bgColor="black"
                gap="0.5rem"
                h="2rem"
              >
                <BsSortDownAlt size={25} color="rgb(255, 190, 7)" />
                <Text>Menor</Text>
              </Button>
            </Flex>
          </VStack>
          <VStack gap="0.5rem">
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

              <WrapItem w="45%" h="25px" />
            </Wrap>
          </VStack>
          <VStack gap="0.5rem">
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
              <WrapItem w="45%" h="25px" />
            </Wrap>
          </VStack>
        </>
      )}
    </Flex>
  );
}

export default Filters;
