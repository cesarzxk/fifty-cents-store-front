import React from 'react';
import ReactDOM from 'react-dom';

import App from './Pages/Home';
import Item from './Pages/Item';

import reportWebVitals from './reportWebVitals';
import { ChakraProvider, Flex, Grid } from "@chakra-ui/react"

import Filters from './Components/Filters';
import Header from './Components/Header';

import {BrowserRouter, Route, Routes} from 'react-router-dom';


ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
    <Grid 
    templateColumns='1fr'
    h='100vh'
    w='100vw'
    alignItems='center'
    display='flex'
    flexDirection='column'
    >
      <Header/>
      <Flex 
        display='flex'
        flexDirection='row'
        height='100%'
        w='70%'
      >
        <Filters/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/:slug" element={<Item/>} />
          </Routes>
        </BrowserRouter>
      </Flex>
    </Grid>

    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
