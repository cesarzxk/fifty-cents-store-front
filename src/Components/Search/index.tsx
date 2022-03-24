import {
  Flex, 
  Box, 
  Input, 
  IconButton
} from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'
import { useGlobal } from '../../Context/Global/GlobalContext';
import { useRef, useState } from 'react';

function Search() {
  const {setKeyword} = useGlobal();
  const [value, setValue] = useState('')

  
 
  return (
    <>
        <Flex>
            <Box
            display='flex'
            flexDirection='row'
            >
                <Input
                placeholder='Não encontrou?Busque!'
                value={value}
                onChange={e=> setValue(e.target.value)}
                />

                <IconButton
                borderWidth={1}
                colorScheme='yellow'
                aria-label='Search database'
                icon={<SearchIcon/>}
                onClick={()=>setKeyword(value)}
                />
            </Box>
        </Flex>
      </>
        
  );
}

export default Search;
