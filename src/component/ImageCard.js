import React from "react";

const ImageCard = ({
  image: { largeImageURL, user, views, downloads, likes, tags }
}) => {
  const tegs = tags.split(",");
  return (
    <div className=" col-sm-12 col-lg-3 col-md-6 g-5 ">
      <div className="card bg-light p-1 m-auto">
        <img
          src={largeImageURL}
          className="card-img-top"
          alt="..."
          style={{ height: "150px" }}
        />
        <div className="card-body">
          <h5 className="card-title text-success">
            Pic By: <strong>{user}</strong>
          </h5>
          <ul className=" list-group list-group-flush">
            <li className="list-group-item bg-light">
              <strong className="text-secondary">Views: </strong>
              {views}
            </li>
            <li className="list-group-item bg-light">
              <strong className="text-secondary">Downloads: </strong>
              {downloads}
            </li>
            <li className="list-group-item bg-light">
              <strong className="text-secondary">Likes: </strong>
              {likes}
            </li>
          </ul>
          <div className=" px-2 py-2 m-2 ">
            {tegs.map((teg, index) => (
              <span
                key={index}
                className=" gx-2 m-auto rounded text-primary bg-light p-1"
              >
                #{teg}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
