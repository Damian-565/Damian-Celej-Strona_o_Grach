import React, { useState, useEffect } from "react";

export default function ButtonMsg() {
const [imie, setImie] = useState("");
const [noweImie, setNoweImie] = useState("");

  useEffect(() => {
  const zapisaneImie = localStorage.getItem("imie");
  if (zapisaneImie) {
  setImie(zapisaneImie);
    }
  }, []);

  const zapiszImie = () => {
    if (noweImie === "") {
    alert("Podaj swoje imię!");
    return;
    }
    setImie(noweImie);
    localStorage.setItem("imie", noweImie);
    setNoweImie("");
  };

  const wyczyscImie = () => {
  setImie("");
  localStorage.removeItem("imie");
  };

  return (
    <div>
    {imie !== "" ? (
      <div>
      <p>Cześć, {imie}!</p>
      <button onClick={wyczyscImie}>Zmień imię</button>
      </div>
      ) : (
      <div>
      <input
      type="text"
      value={noweImie}
      onChange={(e) => setNoweImie(e.target.value)}
      placeholder="Wpisz swoje imię"
      />
      <button onClick={zapiszImie}>Zapisz</button>
      </div>
      )}
      </div>
     );
}

