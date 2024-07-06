import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Book from "./Book";
import { Typography } from "@material-tailwind/react";
import { useBooksList } from "../../Hooks/useUser";
import SearchBar from "../../ui/Searchbar";

const BookList = ({ isAdmin }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  let category = "";
  const token = localStorage.getItem("token");
  const {
    data: Books,
    isLoading,
    refetch,
    error,
  } = useBooksList(token, searchTerm, category);

  useEffect(() => {
    refetch();
  }, []);

  const books = Books?.data?.docs;
  return (
    <div className="flex flex-col justify-start items-center gap-5 p-8">
      <h2 className="text-3xl font-bold text-center">
        {isAdmin ? "Welcome Admin!" : "Our Book Collection"}
      </h2>
      <Typography variant="lead" color="black" className="opacity-80">
        {isAdmin
          ? "Manage books, users, and oversee library operations!"
          : "Explore our diverse collection of books. Find your next great read!"}
      </Typography>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {isAdmin && (
        <div className="w-full flex justify-end items-center p-4">
          <button
            onClick={(e) => navigate("/admin/add_books")}
            className="mt-4 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300"
          >
            Add new book
          </button>
        </div>
      )}
      <div className="flex w-full justify-start items-start flex-wrap gap-16 px-12">
        {books?.map((book) => (
          <Book key={book.id} book={book} isAdmin={isAdmin} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
