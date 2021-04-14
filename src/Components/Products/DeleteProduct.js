import React, { useEffect } from "react";
import ProductService from "../../Services/ProductService";
import { useRouteMatch } from "react-router-dom";

const DeleteProduct = (props) => {
  const match = useRouteMatch();
  useEffect(() => {
    ProductService.deleteProduct(match.params.id).then(() => {
      props.history.push("/seller");
    });
  });

  return (
    <div>
      <h1 className="text-center">Loading ...</h1>
    </div>
  );
};

export default DeleteProduct;
