// const url = "https://backend-devephotel-dev-xfed.4.us-1.fl0.io/api/habitaciones"
const url = "http://localhost:3000/api/habitaciones";

export const habitacionesList = async () => {
  const resp = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await resp.json();

  return data;
};
