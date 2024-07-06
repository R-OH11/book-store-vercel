import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { trimParagraph } from "../../utils/helper";
import { CartContext } from "../../Context/CartContext";

const Book = ({ book, isAdmin }) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext);

  const addToCart = (e, book) => {
    e.stopPropagation();
    dispatch({ type: "addItem", payload: book });
    toast.success(`${book.bookName} added to the cart!`);
  };

  return (
    <div
      className="bg-white w-[300px] rounded-lg shadow-md cursor-pointer"
      onClick={() =>
        isAdmin
          ? navigate("/admin/book_description", { state: book })
          : navigate("/user/book_description", { state: book })
      }
    >
      <img
        src={book?.bookImageUrl}
        alt={book.bookName}
        className="w-full h-48 rounded-t-lg object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {book?.bookName}
        </h3>
        <p className="text-sm text-gray-600">by {book?.authorName}</p>
        <p className="text-sm text-gray-600 font-bold">{book?.genre}</p>
        <p className="mt-2 text-gray-700">
          ${book?.pricePerUnit && book?.pricePerUnit?.toFixed(2)}
        </p>
        <p className="mt-2 text-sm text-gray-600">
          {trimParagraph(book.description, 30)}
        </p>
      </div>
      {!isAdmin && (
        <div className="w-full flex justify-start items-center p-4">
          <button
            onClick={(e) => addToCart(e, book)}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Book;
