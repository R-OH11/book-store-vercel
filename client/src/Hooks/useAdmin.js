import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addBook as addBookApi } from "../services/apiAdmin";
import { updateBook as updateBookApi } from "../services/apiAdmin";
import { deleteBook as deleteBookApi } from "../services/apiAdmin";

export function useAddBook() {
  const { mutate: addBook, isLoading } = useMutation({
    mutationFn: addBookApi,
    onSuccess: (data) => {
      toast.success("Book added successfully!");
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred while adding the book");
    },
  });

  return { addBook, isLoading };
}

export function useUpdateBook() {
  const { mutate: updateBook, isLoading } = useMutation({
    mutationFn: updateBookApi,
    onSuccess: (data) => {
      toast.success("Book updated successfully!");
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred while updating the book");
    },
  });

  return { updateBook, isLoading };
}

export function useDeleteBook() {
  const { mutate: deleteBook, isLoading } = useMutation({
    mutationFn: deleteBookApi,
    onSuccess: (data) => {
      toast.success("Book deleted successfully!");
      // You might want to do something with the response data here
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred while deleting the book");
    },
  });

  return { deleteBook, isLoading };
}
