import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className=" m-2 ">
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="form-control "
          placeholder="Search..."
        />
        <div className="mt-3 text-center">
          <button type="button" className="btn btn-secondary btn-lg">
            Search...
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
