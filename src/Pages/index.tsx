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
      <Header />
      <Outlet />
    </Grid>
  );
}

function LayoutFilter() {
  const dimensions = useDimensions();

  function switchHeight() {
    if (dimensions.width >= 1000) {
      return "85.5%";
    } else {
      return "86%";
    }
  }

  function switchWidth() {
    if (dimensions.width >= 1000) {
      return "70%";
    } else {
      return "100%";
    }
  }

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
      height={switchHeight()}
      w={switchWidth()}
    >
      {switchFilter()}

      <Outlet />
    </Flex>
  );
}
