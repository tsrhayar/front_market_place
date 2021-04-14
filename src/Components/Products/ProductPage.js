import React from "react";

const ProductPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div style={{ minHeight: 200 }} className="col-md-6">
          <img src="img/product1.png" className="img-fluid" alt="" />
        </div>
        <div
          style={{ minHeight: 200 }}
          className="col-md-6 d-flex flex-column justify-content-center"
        >
          <h1 className="h4">Product name</h1>
          <h3 className="h2">49,00 DH</h3>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sed?
          </p>

          <form>
            <div className="form-group ">
              <label htmlFor="example-number-input" className="col-2 col-form-label">
                Number
              </label>
              <div className="col-10">
                <input className="form-control" type="number" min="1" defaultValue="1" id="example-number-input" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
