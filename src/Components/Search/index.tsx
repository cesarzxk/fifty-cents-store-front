import { Flex, Box, Input, IconButton, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import react from "react";

import { useGlobal } from "../../Context/Global/GlobalContext";

type searchProps = {
  onBlur?: () => void;
  autoFocus?: boolean;
};

function Search({ onBlur, autoFocus = false }: searchProps) {
  const { setKeyword } = useGlobal();
  const [value, setValue] = react.useState<string>("");

  function handlerSubmit() {
    setKeyword(value);
  }

  return (
    <Flex
      display="flex"
      flexDirection="row"
      gap="0.5rem"
      justifyContent="center"
      alignItems="center"
      w="100%"
      maxW="350px"
    >
      <Input
        placeholder="Não encontrou? Faça uma busca."
        value={value}
        autoFocus={autoFocus}
        data-testid="searchInput"
        onChange={(event) => setValue(event.target.value)}
        maxH="2rem"
        color="white"
        borderColor="transparent"
      />

      <IconButton
        colorScheme="yellow"
        data-testid="searchButton"
        aria-label=""
        icon={<SearchIcon />}
        borderRadius="100%"
        onClick={handlerSubmit}
      />
    </Flex>
  );
}

export default Search;
