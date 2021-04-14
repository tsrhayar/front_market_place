import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../Context/AuthContext";

const ProductItem = (props) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="card m-1" style={{ width: 250 }}>
      <img
        className="card-img-top"
        src={`img/${props.product.image}`}
        alt="Cardimage"
        style={{ width: "100%" }}
      />
      <div className="card-body">
        <h4 className="card-title h6">{props.product.name}</h4>
        <h2 className="card-text text-bold">{props.product.price} $ </h2>
        <p className="card-text text-muted small">{props.product.description} </p>

        {user.role === "user" ? (
          <Link to={`/addtopannier/${props.product._id}`} className="btn btn-primary">
            Add To Card
          </Link>
        ) : (
          <Link to={`/login`} className="btn btn-primary">
            Add To Card
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
