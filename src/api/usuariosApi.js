const url = "https://backend-devephotel-dev-xfed.4.us-1.fl0.io/api/usuarios";
// const url = "http://localhost:3000/api/usuarios";
const token = JSON.parse(localStorage.getItem("token"));

export const getUsuario = async (page = 0) => {
  try {
    const resp = await fetch(url + "", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token.toString(),
      },
    });
    const data = await resp.json();
    return data;
  } catch (e) {
    console.log(e);
    throw new Error("No se pudo obtener la información.");
  }
};

export const getUsersWithoutStatus = async () => {
  try {
    const resp = await fetch(url + "", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },
    });
    const data = await resp.json();
    return data;
  } catch (e) {
    console.log(e);
    throw new Error("No se pudo obtener la información.");
  }
};

export const getUsuarioById = async (uid) => {
  try {
    const resp = await fetch(url + "/" + uid, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token.toString(),
      },
    });
    console.log(resp);
    const data = await resp.json();

    return data;
  } catch (e) {
    console.log(e);
    throw new Error("No se pudo obtener la información.");
  }
};

export const registro = async (data) => {
  try {
    const resp = await fetch(url + "/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const usuario = await resp.json();

    return usuario;
  } catch (e) {
    console.log(e);
    throw new Error("No se pudo obtener la información.");
  }
};

export const editUsuarioById = async (uid, data) => {
  console.log(data);
  try {
    const resp = await fetch(url + "/" + uid, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },
    });

    const usuario = await resp.json();
    console.log(usuario);
    return usuario;
  } catch (e) {
    console.log(e);
    throw new Error("No se pudo obtener la información.");
  }
};

export const deleteUsuarioById = async (uid) => {
  try {
    const resp = await fetch(url + "/" + uid, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },
    });

    const usuario = await resp.json();
    return usuario;
  } catch (e) {
    console.log(e);
    throw new Error("No se pudo obtener la información.");
  }
};

const usuarioAdd = async (datos) => {
  console.log(datos);
  const resp = await fetch(url + "", {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await resp;

  return data;
};

export { usuarioAdd };
