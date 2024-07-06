import { useQuery, useMutation } from "@tanstack/react-query";
// import { toast } from "react-hot-toast";
import { getBooksList } from "../services/apiUser";
// import { checkout as checkoutApi } from "../services/apiUser";

export function useBooksList(token, searchedValue, category = "") {
  return useQuery({
    queryKey: ["booksList", searchedValue, category],
    queryFn: () => getBooksList({ token, searchedValue, category }),
  });
}

export function useCheckout() {
  const { mutate: checkout, isLoading } = useMutation({
    mutationFn: checkoutApi,
    onSuccess: (data) => {
      toast.success("Order placed successfully!");
      // You might want to do something with the response data here
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred during checkout");
    },
  });

  return { checkout, isLoading };
}
