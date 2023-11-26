const url = "https://backend-devephotel-dev-xfed.4.us-1.fl0.io/api/usuarios";

const usuarioAdd = async (datos) => {
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await resp.json();

  return data;
};

export { usuarioAdd };
