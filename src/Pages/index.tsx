
import Filters from '../Components/Filters';
import {Route, Routes} from 'react-router-dom';

import { Flex } from '@chakra-ui/react';

import Item from '../Pages/Item';
import Home from './Home';

export default function Pages(){
    return(
    
    <Flex 
    display='flex'
    flexDirection='row'
    height='100%'
    w='70%'
    >
        <Filters/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:slug" element={<Item/>} />
        </Routes>
    </Flex>
    
    
    )
}