import React from "react";
import { Input, IconButton } from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="text"
        label="Search"
        value={searchTerm}
        onChange={handleSearch}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      {searchTerm && (
        <IconButton
          size="sm"
          color="gray"
          variant="text"
          onClick={clearSearch}
          className="!absolute right-1 top-1 rounded"
        >
          <RxCross2 className="h-4 w-4" />
        </IconButton>
      )}
    </div>
  );
}
