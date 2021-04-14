// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getProducts: () => {
    return fetch("https://backendmarketplacepara.herokuapp.com/product/").then((response) => {
      if (response.status !== 401) return response.json().then((data) => data);
      else return { message: { msgBody: "UnAuthorized", msgError: true } };
    });
  },

  getProductsByPriceLTH: () => {
    return fetch("https://backendmarketplacepara.herokuapp.com/product/bypricelth").then((response) => {
      if (response.status !== 401) return response.json().then((data) => data);
      else return { message: { msgBody: "UnAuthorized", msgError: true } };
    });
  },
  getProductsByPriceHTL: () => {
    return fetch("https://backendmarketplacepara.herokuapp.com/product/bypricehtl").then((response) => {
      if (response.status !== 401) return response.json().then((data) => data);
      else return { message: { msgBody: "UnAuthorized", msgError: true } };
    });
  },

  postProduct: (product) => {
    console.log(product);
    return fetch("https://backendmarketplacepara.herokuapp.com/product/add", {
      method: "post",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },

  addToPannier: (product) => {
    return fetch(`https://backendmarketplacepara.herokuapp.com/product/addtopannier/${product}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },

  getFromPannier: () => {
    return fetch(`https://backendmarketplacepara.herokuapp.com/product/getfrompannier`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },

  deleteFromPannier: (id) => {
    return fetch(`https://backendmarketplacepara.herokuapp.com/product/deletefrompannier/${id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },

  deleteProduct: (id) => {
    return fetch(`https://backendmarketplacepara.herokuapp.com/product/deleteproduct/${id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },

  getProductThisSeller: () => {
    return fetch(`https://backendmarketplacepara.herokuapp.com/product/productthisseller`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },

  getAllCategories: () => {
    return fetch(`https://backendmarketplacepara.herokuapp.com/product/categories`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },

  getOneProduct: (id) => {
    return fetch(`https://backendmarketplacepara.herokuapp.com/product/getproduct/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },
};
