import React, { useState, useEffect } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import ImageCard from "./component/ImageCard";
import ImageSearch from "./component/ImageSearch";

const App = () => {
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("dog");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_API}&q=${term}+flowers&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImage(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <div className="container-fluid ">
      <div className="row">
        <ImageSearch searchText={(text) => setTerm(text)} />
      </div>
      <div className="row align-items-start">
        {!isLoading && image.length === 0 && (
          <h1>
            search <strong className="text-secondary">{term}</strong> not Found
          </h1>
        )}
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {image.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
