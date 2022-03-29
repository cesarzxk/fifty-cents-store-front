import { SearchIcon } from "@chakra-ui/icons";
import { Img, Spacer, HStack, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Search from "../../Components/Search";
import useDimensions from "../../Hooks/useDimensions";
import Cart from "../Cart";
import User from "../User";

function Header() {
  const navigate = useNavigate();
  const dimensions = useDimensions();
  const [isSearch, setIsSearch] = useState(false);

  function switchWidth() {
    if (dimensions.width >= 1366) {
      return "70%";
    } else {
      return "100%";
    }
  }

  return (
    <HStack
      bg="gray.300"
      w={switchWidth()}
      h="5rem"
      marginY="1rem"
      paddingX="1rem"
      justifyContent="center"
      alignItems="center"
    >
      <Img h="5rem" src="./logo.svg" onClick={() => navigate("/")} />

      <Spacer />

      {isSearch ? (
        <Search autoFocus={true} onBlur={() => setIsSearch(false)} />
      ) : (
        <>
          {dimensions.width >= 400 ? (
            <Search />
          ) : (
            <IconButton
              colorScheme="yellow"
              aria-label="Search database"
              h="3rem"
              w="3rem"
              data-testid="setSeachButton"
              borderRadius="100%"
              icon={<SearchIcon />}
              onClick={() => setIsSearch(true)}
            />
          )}
          <User />
          <Cart />
        </>
      )}
    </HStack>
  );
}

export default Header;
