import { useQuery } from "@tanstack/react-query";
import { productsApi, productsFiltersProps } from "../Api";

export function useGetProducts(props: productsFiltersProps) {
  return useQuery({
    queryKey: ["useGetProducts", props],
    queryFn: () => productsApi.getProducts(props),
    refetchInterval: 60 * 60 * 10,
  });
}
