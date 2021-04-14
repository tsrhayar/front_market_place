import React, { useState, useRef, useEffect } from "react";
import ProductService from "../../Services/ProductService";
import Message from "../Message";
import { useRouteMatch } from "react-router-dom";

const Register = (props) => {
  const match = useRouteMatch();
  useEffect(() => {
    ProductService.getOneProduct(match.params.id).then((product) => {
      console.log("sssss", product);
      //   props.history.push("/seller");
    });
  });

  const [product, setProduct] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    category: "",
  });

  const [message, setMessage] = useState(null);
  let timerID = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setProduct({
      name: "xxxxx",
      description: "",
      image: "",
      price: "",
      category: "",
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    ProductService.postProduct(product).then((data) => {
      const { message } = data;
      setMessage(message);
      resetForm();
      if (!message.msgError) {
        timerID = setTimeout(() => {
          props.history.push("/login");
        }, 2000);
      }
    });
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    ProductService.getAllCategories().then(({ categories }) => {
      setCategories(categories);
    });
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>Edit Product</h3>
        <div className="form-group">
          <input
            type="text"
            name="name"
            defaultValue="eeeeeeee"
            value={product.name}
            onChange={onChange}
            className="form-control"
            placeholder="Enter Name Product"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={onChange}
            className="form-control"
            placeholder="Enter Description Product"
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            name="image"
            value={product.image}
            onChange={onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={onChange}
            className="form-control"
            placeholder="Enter Price Product"
          />
        </div>
        <div className="form-group">
          <select className="form-control" name="category" onChange={onChange}>
            {categories.map((category) => (
              <option key={category._id} defaultValue={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Add Product
          </button>
        </div>
      </form>
      {message ? <Message message={message} /> : null}
    </div>
  );
};

export default Register;
