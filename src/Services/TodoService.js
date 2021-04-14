// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getTodos: () => {
    return fetch("https://backendmarketplacepara.herokuapp.com/user/todo").then((response) => {
      if (response.status !== 401) {
        return response.json().then((data) => data);
      } else return { message: { msgBody: "UnAuthorized", msgError: true } };
    });
  },
  postTodo: (todo) => {
    return fetch("https://backendmarketplacepara.herokuapp.com/user/todo", {
      method: "post",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status !== 401) {
        return response.json().then((data) => data);
      } else return { message: { msgBody: "UnAuthorized" }, msgError: true };
    });
  },
};
