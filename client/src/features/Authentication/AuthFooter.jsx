import React from "react";

const AuthFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="sticky bottom-0 bg-gray-200 w-full text-gray-700 py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {currentYear} Waterstones Booksellers Limited. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default AuthFooter;
