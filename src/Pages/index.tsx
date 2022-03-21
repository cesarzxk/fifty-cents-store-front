
import Filters from '../Components/Filters';
import {Outlet, Route, Routes, useOutlet} from 'react-router-dom';

import { Flex, Grid } from '@chakra-ui/react';

import Item from '../Pages/Item';
import Home from './Home';

import Header from '../Containers/Header';
import Orders from '../Pages/Orders';

export default function Pages(){
    
    return(
        <Routes location="">
            <Route element={<Layout/>} path="">
                <Route path='order' element={<Orders/>}/>
                <Route element={<LayoutFilter/>} path="">
                    <Route  path="*" element={<Home/>}/>
                    <Route  path="/" element={<Home/>}/>
                    <Route  path="home/:slug" element={<Item/>} />
                </Route>
            </Route>
        </Routes>

    )
}


function Layout(){
    return(
        <Grid 
        templateColumns='1fr'
        h='100vh'
        w='100vw'
        alignItems='center'
        display='flex'
        flexDirection='column'>
        <Header/>
            <Outlet/>
        </Grid>
        )
}

function LayoutFilter(){
    return(
        <Flex 
            display='flex'
            flexDirection='row'
            height='100%'
            w='70%'
        >
            <Filters/>   
            <Outlet/>
        </Flex>
    )
}

