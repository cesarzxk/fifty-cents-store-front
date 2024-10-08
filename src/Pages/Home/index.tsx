import { Flex, Wrap, WrapItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ItemCard from "../../Components/ItemCard";
import { useGlobal } from "../../Context/Global/GlobalContext";
import { useGetProducts } from "../../Hooks/useGetProducts";

import { Loading } from "../../Components/Loading";

function Home() {
  const { filtersCategory, filtersMaterial, keyword, sort } = useGlobal();

  const { data, isLoading } = useGetProducts({
    category: filtersCategory,
    material: filtersMaterial,
    search: keyword,
    orderlyBy: sort,
  });

  return isLoading ? (
    <Loading />
  ) : (
    <Flex flex={6} height="100%">
      <Wrap
        overflowY="auto"
        overflowX="hidden"
        height="100%"
        w="100%"
        marginLeft="1rem"
        paddingTop="1rem"
        justify={{ base: "center", md: "flex-start" }}
      >
        {data?.map((item: any) => (
          <Link
            key={`${item?.id}-${item?.locale}`}
            to={`/home/${item?.id}-${item?.locale}`}
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
