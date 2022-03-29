import { Flex, Box, Input, IconButton, FormControl } from "@chakra-ui/react";
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
    <Flex>
      <Box onBlur={onBlur} flex={1} display="flex" flexDirection="row">
        <Input
          placeholder="Não encontrou?Busque!"
          value={value}
          autoFocus={autoFocus}
          data-testid="searchInput"
          onChange={(event) => setValue(event.target.value)}
        />

        <IconButton
          borderWidth={1}
          colorScheme="yellow"
          data-testid="searchButton"
          aria-label=""
          icon={<SearchIcon />}
          onClick={handlerSubmit}
        />
      </Box>
    </Flex>
  );
}

export default Search;
