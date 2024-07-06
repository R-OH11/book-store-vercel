import React, { useContext } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDeleteBook } from "../../Hooks/useAdmin";
import { CartContext } from "../../Context/CartContext";

const BookDescription = ({ isAdmin }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const book = location?.state;
  const { deleteBook, isLoading } = useDeleteBook();
  const { dispatch } = useContext(CartContext);

  const addToCart = (e, book) => {
    e.stopPropagation();
    dispatch({ type: "addItem", payload: book });
    toast.success(`${book.bookName} added to the cart!`);
  };

  const deleteBookHandler = (bookId) => {
    Swal.fire({
      text: "Are you sure, you want to delete this book?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const token = localStorage.getItem("token");
        deleteBook(
          { token, bookId },
          {
            onSettled: () => {
              navigate("/admin/home");
            },
          }
        );
      }
    });
  };

  if (!book) {
    return <div className="text-center">Book not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img
            src={book.bookImageUrl}
            alt={book.name}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        {isAdmin && (
          <div className="absolute top-0 right-[-100px] z-10">
            <div className="flex justify-end items-center gap-8">
              <MdEdit
                className="w-6 h-6 hover:text-blue-800 cursor-pointer"
                onClick={() =>
                  navigate("/admin/update_books/", { state: book })
                }
              />
              <MdDelete
                className="w-6 h-6 text-red-700 cursor-pointer"
                onClick={() => deleteBookHandler(book?._id)}
              />
            </div>
          </div>
        )}
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{book?.bookName}</h1>
          <p className="text-xl text-gray-600 mb-4">by {book?.authorName}</p>
          <p className="text-lg font-semibold mb-2">Genre: {book?.genre}</p>
          <p className="text-2xl font-bold text-green-600 mb-4">
            ${book?.pricePerUnit?.toFixed(2)}
          </p>
          <p className="text-gray-700 mb-6">{book?.description}</p>
          {!isAdmin && (
            <button
              onClick={(e) => addToCart(e, book)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDescription;
