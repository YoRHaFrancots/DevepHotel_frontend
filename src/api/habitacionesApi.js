const url =
  "https://backend-devephotel-dev-xfed.4.us-1.fl0.io/api/habitaciones";
const token = JSON.parse(localStorage.getItem("token")) || null;

const habitacionesList = async (pagina) => {
  const resp = await fetch(url + "?desde=" + pagina, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await resp.json();

  return data;
};

const habitacionAdd = async (datos) => {
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": token,
    },
  });

  const data = await resp.json();
  return data;
};

const habitacionUpdate = async (id, datos) => {
  const resp = await fetch(url + "/" + id, {
    method: "PUT",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": token,
    },
  });

  const data = await resp.json();

  return data;
};

const habitacionDelete = async (id) => {
  const resp = await fetch(url + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": token,
    },
  });

  const data = await resp.json();

  return data;
};

export { habitacionesList, habitacionAdd, habitacionUpdate, habitacionDelete };
