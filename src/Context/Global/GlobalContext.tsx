import { useDisclosure } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useContext, useEffect, useMemo, useState } from "react";
import { createContext, ReactNode } from "react";
import { items, order } from "../../Api";
import { useAuth } from "../Auth/AuthContext";

type globalContextData = {
  filtersMaterial: string[];
  filtersCategory: string[];
  keyword: string;
  itemsCart: itemCartType[] | [];
  totalCartPrice: number;
  sort: sortType;
  isFiltersOpen: boolean;
  onFiltersOpen: () => void;
  onFiltersClose: () => void;
  setFiltersMaterial: (filterCategory: string[]) => void;
  setFiltersCategory: (filterCategory: string[]) => void;
  getItem: (locale: string, id: string) => Promise<productType>;
  getOrders: () => Promise<responseProductsReques>;
  setKeyword: (keyword: string) => void;
  setItemsCart: (items: itemCartType[] | []) => void;
  addItemtoCart: (item: itemCartType) => void;
  setOrder: () => Promise<number>;
  setSort: (sortType: sortType) => void;
};

export const GlobalContext = createContext({} as globalContextData);

type globalProviderProps = {
  children: ReactNode;
};

type productType = {
  hasDiscount: boolean;
  name: string;
  images: string[];
  description: string;
  price: string;
  discountValue: string;
  material: string;
  category: string;
  id: string;
  locale: string;
};

type responseProductsReques = {
  data: orderType[];
  status: number;
};

type orderItemsType = {
  productId: number;
  locale: string;
  price: number;
  quantity: number;
  name: string;
  _id: string;
};

type orderType = {
  _id?: string;
  items: orderItemsType[];
  clientId: number;
  data?: string;
  total: number;
};

type itemCartType = {
  name: string;
  productId: string;
  locale: string;
  price: number;
  quantity: number;
};

type sortType = "bigger" | "smaller" | undefined;

export function GlobalProvider({ children }: globalProviderProps) {
  const { userInfo, token } = useAuth();

  const [filtersMaterial, setFiltersMaterial] = useState<string[]>([]);
  const [filtersCategory, setFiltersCategory] = useState<string[]>([]);
  const [keyword, setKeyword] = useState("");
  const [itemsCart, setItemsCart] = useState<itemCartType[] | []>([]);
  const [totalCartPrice, setTotalPriceCart] = useState<number>(0);
  const [sort, setSort] = useState<sortType>(undefined);
  const { isOpen, onClose, onOpen } = useDisclosure();

  useMemo(() => {
    if (keyword || filtersMaterial || filtersCategory) {
      getItems(["european", "brazilian"]);
    }
  }, [filtersCategory, filtersMaterial, keyword, sort]);

  function addItemtoCart(item: itemCartType) {
    let newCart = itemsCart.slice();
    let isOnCart = false;

    if (itemsCart.length > 0) {
      newCart = itemsCart.map((cartItem: itemCartType) => {
        if (cartItem.productId == item.productId) {
          const newCartItem = {
            price: cartItem.price,
            name: cartItem.name,
            locale: cartItem.locale,
            quantity: cartItem.quantity + 1,
            productId: cartItem.productId,
          };
          isOnCart = true;
          return newCartItem;
        }
        return cartItem;
      });
    }

    isOnCart ? setItemsCart(newCart) : setItemsCart([item, ...newCart]);
  }

  useEffect(() => {
    setTotalCartPrice();
  }, [itemsCart]);

  function setTotalCartPrice() {
    let vetor = 0;
    itemsCart.map((item) => (vetor = vetor + item.price));
    setTotalPriceCart(vetor);
  }

  async function getItems(locale: string[]) {
    // const { data } = await items
    //   .get("", {
    //     params: {
    //       locale: locale,
    //       material: filtersMaterial,
    //       category: filtersCategory,
    //       search: keyword == "" ? undefined : keyword,
    //       orderlyBy: sort,
    //     },
    //   })
    //   .then((result) => {
    //     return {
    //       status: result.status,
    //       data: result.data,
    //     };
    //   })
    //   .catch((e: AxiosError) => {
    //     return {
    //       status: e.response?.status ? e.response?.status : 0,
    //       data: e.response?.data,
    //     };
    //   });
    // setProducts(data);
  }

  async function getItem(locale: string, id: string) {
    const { data } = await items
      .get("", {
        params: {
          locale: [locale],
          id: id,
        },
      })
      .then((result) => {
        return {
          status: result.status,
          data: result.data,
        };
      })
      .catch((e: AxiosError) => {
        return {
          status: e.response?.status ? e.response?.status : 0,
          data: e.response?.data,
        };
      });

    return data[0] as productType;
  }

  async function getOrders() {
    const { data, status } = await order
      .get("", {
        params: {
          clientId: userInfo?._id,
        },
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        return {
          status: result.status,
          data: result.data,
        };
      })
      .catch((e: AxiosError) => {
        return {
          status: e.response?.status ? e.response?.status : 0,
          data: e.response?.data,
        };
      });
    return { data, status } as responseProductsReques;
  }

  async function setOrder() {
    const { status } = await order
      .post(
        "",
        {
          clientId: userInfo?._id,
          total: totalCartPrice,
          items: itemsCart,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        return {
          status: result.status,
        };
      })
      .catch((e: AxiosError) => {
        return {
          status: e.response?.status ? e.response?.status : 0,
        };
      });
    return status;
  }

  return (
    <GlobalContext.Provider
      value={{
        filtersMaterial,
        filtersCategory,
        keyword,
        itemsCart,
        totalCartPrice,
        sort,
        isFiltersOpen: isOpen,
        onFiltersOpen: onOpen,
        onFiltersClose: onClose,
        setFiltersMaterial,
        setFiltersCategory,
        getItem,
        getOrders,
        setKeyword,
        setItemsCart,
        addItemtoCart,
        setOrder,
        setSort,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobal = () => useContext(GlobalContext);
