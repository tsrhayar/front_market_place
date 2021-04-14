// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAdmins: () => {
    return fetch("/user/admins").then((response) => {
      if (response.status !== 401) return response.json().then((data) => data);
      else return { message: { msgBody: "UnAuthorized", msgError: true } };
    });
  },

  getLivreurs: () => {
    return fetch("/user/livreurs").then((response) => {
      if (response.status !== 401) return response.json().then((data) => data);
      else return { message: { msgBody: "UnAuthorized", msgError: true } };
    });
  },

  addAdmin: (user) => {
    console.log(user);
    return fetch("/user/addadmin", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401) {
        return res.json().then((data) => data);
      } else return { isAuthenticated: false, user: { username: "", role: "" } };
    });
  },

  addLivreur: (user) => {
    console.log(user);
    return fetch("/user/addlivreur", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401) {
        return res.json().then((data) => data);
      } else return { isAuthenticated: false, user: { username: "", role: "" } };
    });
  },

  blockAdmin: (id) => {
    return fetch(`/user/blockadmin/${id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401) {
        return res.json().then((data) => data);
      } else return { isAuthenticated: false, user: { username: "", role: "" } };
    });
  },

  blockLivreur: (id) => {
    return fetch(`/user/blocklivreur/${id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401) {
        return res.json().then((data) => data);
      } else return { isAuthenticated: false, user: { username: "", role: "" } };
    });
  },

  activeAdmin: (id) => {
    return fetch(`/user/activeadmin/${id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401) {
        return res.json().then((data) => data);
      } else return { isAuthenticated: false, user: { username: "", role: "" } };
    });
  },

  activeLivreur: (id) => {
    return fetch(`/user/activelivreur/${id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401) {
        return res.json().then((data) => data);
      } else return { isAuthenticated: false, user: { username: "", role: "" } };
    });
  },

  deleteAdmin: (id) => {
    return fetch(`/user/deleteadmin/${id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401) {
        return res.json().then((data) => data);
      } else return { isAuthenticated: false, user: { username: "", role: "" } };
    });
  },

  deleteLivreur: (id) => {
    return fetch(`/user/deletelivreur/${id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401) {
        return res.json().then((data) => data);
      } else return { isAuthenticated: false, user: { username: "", role: "" } };
    });
  },

  // getProductsByPriceLTH: () => {
  //   return fetch("/product/bypricelth").then((response) => {
  //     if (response.status !== 401) return response.json().then((data) => data);
  //     else return { message: { msgBody: "UnAuthorized", msgError: true } };
  //   });
  // },
  // getProductsByPriceHTL: () => {
  //   return fetch("/product/bypricehtl").then((response) => {
  //     if (response.status !== 401) return response.json().then((data) => data);
  //     else return { message: { msgBody: "UnAuthorized", msgError: true } };
  //   });
  // },

  // postProduct: (product) => {
  //   console.log(product);
  //   return fetch("/product/add", {
  //     method: "post",
  //     body: JSON.stringify(product),
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => data);
  // },
};
