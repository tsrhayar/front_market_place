// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login: (user) => {
    console.log(user);
    return fetch("https://backendmarketplacepara.herokuapp.com/user/login", {
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


  register: (user) => {
    console.log(user);
    return fetch("https://backendmarketplacepara.herokuapp.com/user/registre", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },

  logout: () => {
    return fetch("https://backendmarketplacepara.herokuapp.com/user/logout")
      .then((res) => res.json())
      .then((data) => data);
  },

  isAuthenticated: () => {
    return fetch("https://backendmarketplacepara.herokuapp.com/user/authenticated").then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      else return { isAuthenticated: false, user: { username: "", role: "" } };
    });
  },
};
