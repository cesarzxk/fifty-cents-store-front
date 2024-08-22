import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Spacer,
  HStack,
  IconButton,
  CloseButton,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Search from "../../Components/Search";
import { useGlobal } from "../../Context/Global/GlobalContext";
import useDimensions from "../../Hooks/useDimensions";
import Cart from "../Cart";
import User from "../User";
import Logo from "./Logo.svg";

function Header() {
  const navigate = useNavigate();
  const dimensions = useDimensions();
  const { onFiltersOpen } = useGlobal();
  const [isSearch, setIsSearch] = useState(false);

  return (
    <HStack
      bg="black"
      w="100%"
      h="3rem"
      paddingX={{ base: "1rem", sm: "1.5rem", md: "2rem" }}
      justifyContent="center"
      alignItems="center"
    >
      {dimensions.width <= 1000 && (
        <HamburgerIcon
          color="white"
          height="2.5rem"
          width="2.5rem"
          cursor="pointer"
          onClick={onFiltersOpen}
        />
      )}

      {isSearch ? (
        <HStack alignItems="center" w="100%">
          <Search autoFocus={true} onBlur={() => setIsSearch(false)} />
          <CloseButton
            data-testid="exitSearch"
            aria-label="Exit Search Mode"
            borderRadius="100%"
            color="white"
            border="1px solid red"
            onClick={() => setIsSearch(false)}
            height="2.5rem"
            width="2.5rem"
          />
        </HStack>
      ) : (
        <>
          <Flex onClick={() => navigate("/")} cursor="pointer">
            <Image src={Logo} h="3rem" />
          </Flex>
          <Spacer />
          {dimensions.width >= 500 ? (
            <Search />
          ) : (
            <IconButton
              colorScheme="yellow"
              data-testid="setSeachButton"
              aria-label="Search database"
              icon={<SearchIcon />}
              borderRadius="100%"
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
