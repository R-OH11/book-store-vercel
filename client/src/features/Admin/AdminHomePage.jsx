import React from "react";
import BookList from "../User/BookList";

const AdminHomePage = () => {
  return (
    <div>
      <BookList isAdmin={true} />
    </div>
  );
};

export default AdminHomePage;
