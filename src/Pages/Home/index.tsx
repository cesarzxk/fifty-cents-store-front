import {
  Center,
  CircularProgress,
  Flex,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ItemCard from "../../Components/ItemCard";
import { useGlobal } from "../../Context/Global/GlobalContext";
import useDimensions from "../../Hooks/useDimensions";

function Home() {
  const { products } = useGlobal();
  const dimensions = useDimensions();

  function switchJustify() {
    if (dimensions.width >= 1366) {
      return "flex-start";
    } else {
      return "center";
    }
  }

  return !products ? (
    <Center w="100%" flex={6}>
      <CircularProgress size="100px" isIndeterminate color="yellow" />
    </Center>
  ) : (
    <Flex flex={6} height="100%">
      <Wrap
        overflowY="scroll"
        overflowX="hidden"
        height="100%"
        w="100%"
        marginLeft="1rem"
        justify={switchJustify()}
      >
        {products?.map((item) => (
          <Link
            key={`${item.id}-${item.locale}`}
            to={`/home/${item.id}-${item.locale}`}
          >
            <WrapItem>
              <ItemCard property={item} />
            </WrapItem>
          </Link>
        ))}
      </Wrap>
    </Flex>
  );
}

export default Home;
