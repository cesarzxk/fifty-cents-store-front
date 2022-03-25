import {
  Flex, 
  Box, 
  Input, 
  IconButton
} from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'
import {useState} from 'react';

import {useGlobal} from '../../Context/Global/GlobalContext';

type searchProps = {
  onBlur?:()=>void,
  autoFocus?:boolean,
}

function Search({onBlur, autoFocus = false}:searchProps) {
  const {setKeyword} = useGlobal();
  const [value, setValue] = useState('')

  return (
    <>
      <Flex>
        <Box
        onBlur={onBlur}
        flex={1}
        display='flex'
        flexDirection='row'>
            <Input
            placeholder='Não encontrou?Busque!'
            value={value}
            autoFocus={autoFocus}
            onChange={
              (event)=> setValue(event.target.value)
            }
            />

            <IconButton
            borderWidth={1}
            colorScheme='yellow'
            aria-label='Search database'
            icon={<SearchIcon/>}
            onClick={
              ()=>setKeyword(value)
            }/>
        </Box>
      </Flex>
    </>
  );
}

export default Search;
