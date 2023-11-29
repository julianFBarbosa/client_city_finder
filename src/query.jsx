import axios from "axios";
import { QueryClient, useQuery } from "react-query";

const api_url = "https://busca-cidades.fly.dev/api";
export const queryClient = new QueryClient();

export function useBrazilianStateList() {
  return useQuery({
    queryKey: ["states"],
    queryFn: async () => {
      const { data } = await axios.get(`${api_url}/v1/states`);
      return data;
    },
  });
}

export function useCities(uf = null, page = 1) {
  return useQuery({
    queryKey: ["cities"],
    queryFn: async () => {
      if (!uf) {
        return null;
      }
      const { data } = await axios.get(`${api_url}/v1/cities/${uf}?page=${page}`);

      return data;
    },
  });
}
