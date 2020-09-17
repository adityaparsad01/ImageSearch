import React, { useState } from "react";

const ImageType = ({ searchType, length }) => {
  const [text, setText] = useState("");

  console.log(length);

  const onSubmit = (e) => {
    setText(e.target.value);
    searchType(text);
  };

  return (
    <>
      <div>
        <h1>Total Result: {length || 0}</h1>
      </div>
      <div className="col-12 p-3 mx-2 m-auto text-center">
        <button
          type="button"
          onClick={onSubmit}
          value="image"
          className="btn btn-dark mx-2 "
        >
          All
        </button>
        <button
          type="button"
          onClick={onSubmit}
          value="photo"
          className="btn btn-primary mx-2"
        >
          photo
        </button>{" "}
        <button
          type="button"
          onClick={onSubmit}
          value="vector"
          className="btn btn-primary mx-2"
        >
          vector
        </button>{" "}
        <button
          type="button"
          onClick={onSubmit}
          value="illustration"
          className="btn btn-primary mx-2"
        >
          illu
        </button>
      </div>{" "}
    </>
  );
};

export default ImageType;
