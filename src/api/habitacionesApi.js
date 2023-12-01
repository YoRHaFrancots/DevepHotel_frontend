const url = "https://backend-devephotel-dev-xfed.4.us-1.fl0.io/api/habitaciones"

export const habitacionesList = async () => {
    const resp = await fetch(url,  {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  
    const data = await resp.json();
  
    return data;
  };

  export const hatiacionAdd = async (datos)=>{
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })

    const data = await resp.json();

    return data;
  };

  export const habitacionUpdate = async (id, datos) => {
    const resp = await fetch(`${url}/${id}`, {
      method: "PUT",
      body:JSON.stringify(datos),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    
    const data = await resp.json();

    return data;
  };

  export const habitacionDelete = async (id) => {
    const resp = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    
    const data = await resp.json();

    return data;
  };

