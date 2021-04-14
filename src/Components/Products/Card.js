import React, { useState, useEffect } from "react";
import ProductService from "../../Services/ProductService";
import { Link } from "react-router-dom";

const Card = () => {
  const [pannier, setPannier] = useState([]);

  useEffect(() => {
    ProductService.getFromPannier().then(({ pannier }) => {
      setPannier(pannier);
    });
  }, []);

  return (
    <div className="container">
      {pannier.length > 0 ? (
        pannier.map((panierItem) => (
          <div key={panierItem._id} className="row shadow-sm mb-2">
            <div className="col-md-4">
              <div className="m-auto" style={{ height: 150, width: 150 }}>
                <img
                  className="overflow-hidden card-img-top h-100"
                  src={`img/${panierItem.image}`}
                  alt="Cardimage"
                />
              </div>
            </div>
            <div className="col-md-5 d-flex flex-column justify-content-center">
              <h2>{panierItem.price} $</h2>
              <h4>{panierItem.name}</h4>
              <h6 className="text-muted">{panierItem.description}</h6>
            </div>
            <div className="col-md-3 d-flex flex-column justify-content-center">
              <Link className="btn btn-danger " to={`/deletefrompannier/${panierItem._id}`}>
                Delete
              </Link>
            </div>
          </div>
        ))
      ) : (
        <h2 className="text-center">Nothing in card ....</h2>
      )}
    </div>
  );
};

export default Card;
