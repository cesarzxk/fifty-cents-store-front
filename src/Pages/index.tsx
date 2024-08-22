import Filters from "../Components/Filters";
import { Outlet, Route, Routes } from "react-router-dom";
import { Flex, Grid } from "@chakra-ui/react";

import Item from "./Item";
import Home from "./Home";
import Header from "../Containers/Header";
import Orders from "./Orders";
import Checkout from "./Checkout";
import useDimensions from "../Hooks/useDimensions";
import DrawerFilter from "../Containers/DrawerFilter";
import "../theme/global.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Pages() {
  return (
    <Routes location="">
      <Route element={<Layout />} path="">
        <Route path="orders" element={<Orders />} />
        <Route path="checkout" element={<Checkout />} />
        <Route element={<LayoutFilter />} path="">
          <Route path="/" element={<Home />} />
          <Route path="home/:slug" element={<Item />} />
        </Route>
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <Grid
      h="100vh"
      w="100vw"
      alignItems="center"
      display="flex"
      flexDirection="column"
    >
      <QueryClientProvider client={new QueryClient()}>
        <ReactQueryDevtools />
        <Header />
        <Outlet />
      </QueryClientProvider>
    </Grid>
  );
}

function LayoutFilter() {
  const dimensions = useDimensions();

  function switchFilter() {
    if (dimensions.width >= 1000) {
      return <Filters />;
    } else {
      return <DrawerFilter />;
    }
  }

  return (
    <Flex
      display="flex"
      flexDirection="row"
      height={"calc(100vh - 3rem)"}
      w={"100%"}
    >
      {switchFilter()}

      <Outlet />
    </Flex>
  );
}
