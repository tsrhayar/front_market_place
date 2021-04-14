import React, { useState, useEffect } from "react";
import ProductService from "../../Services/ProductService";
import { Link } from "react-router-dom";

const Seller = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProductThisSeller().then(({ products }) => {
      setProducts(products);
    });
  }, []);
  return (
    <div className="container">
      <Link className="btn btn-primary" to="/addproduct">
        Add Product
      </Link>
      {(products && products.length) > 0 ? (
        products.map((product) => (
          <div key={product._id} className="row shadow-sm mb-2">
            <div className="col-md-4">
              <div className="m-auto" style={{ height: 150, width: 150 }}>
                <img
                  className="overflow-hidden card-img-top h-100"
                  src={`img/${product.image}`}
                  alt="Cardimage"
                />
              </div>
            </div>
            <div className="col-md-5 d-flex flex-column justify-content-center">
              <h2>{product.price} $</h2>
              <h4>{product.name}</h4>
              <h6 className="text-muted">{product.description}</h6>
            </div>
            <div className="col-md-3 d-flex flex-column justify-content-center">
              {/* <Link className="btn btn-info mb-1" to={`/editproduct/${product._id}`}>
                Edit
              </Link> */}
              <Link className="btn btn-danger " to={`/deleteproduct/${product._id}`}>
                Delete
              </Link>
            </div>
          </div>
        ))
      ) : products && products.length === 0 ? (
        <h2 className="text-center">Nothing in store ....</h2>
      ) : (
        <h2 className="text-center">Loading ...</h2>
      )}
    </div>
  );
};

export default Seller;
