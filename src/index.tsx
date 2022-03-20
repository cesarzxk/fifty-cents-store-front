import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, Grid } from "@chakra-ui/react"
import styled from "@emotion/styled";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import App from './Pages';

import Header from './Containers/Header';

const AppContainer = styled.div`
  font-family: "M PLUS Rounded 1c";
`;

ReactDOM.render(
  <ChakraProvider>
    <AppContainer>
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
      <BrowserRouter>
        <Routes location='/home'>
          <Route path='/home' element={<App/>}/>
        </Routes>
      </BrowserRouter>
    </Grid>

    </React.StrictMode>
    </AppContainer>
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
