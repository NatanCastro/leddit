import { user } from "@/types/user";
import axios from "axios";
import { useQuery } from "react-query";

export default function useUser(): {
  isLoading: boolean;
  error: { message: string } | null;
  data: { user: user } | undefined;
} {
  const { isLoading, error, data } = useQuery<
    { user: user },
    { message: string }
  >("user", async () => {
    const id = sessionStorage.getItem("id");
    try {
      const res = await axios.get(`http://localhost:6969/user/${id}`);
      if (res.status === 400) throw Error("usuario não encontrado");
      return res.data;
    } catch (e: any) {
      console.log(e.message);
      return null;
    }
  });
  return { isLoading, error, data };
}
