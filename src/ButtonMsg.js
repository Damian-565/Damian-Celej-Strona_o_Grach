import React, { useState, useEffect } from "react";

export default function ButtonMsg() {
  const [imie, setImie] = useState("");

  useEffect(() => {
  const zapisaneImie = localStorage.getItem("imie");
  if (zapisaneImie) {
  setImie(zapisaneImie);
  }
  }, []);

  const zapiszImie = () => {
    if (noweImie.length < 1) {
      alert("Podaj swoje imię!");
    return;
    }
    setImie(noweImie);
    localStorage.setItem("imie", noweImie);
  };

  const wyczyscImie = () => {
  setImie("");
    ocalStorage.removeItem("imie");
  };

  return (
    <div>
      {imie === "" ? (
      <button onClick={zapiszImie}>Wpisz swoje imię</button>
      ) : (
      <div>
      <p>Cześć, {imie}!</p>
      <button onClick={wyczyscImie}>Zmień imię</button>
      </div>
      )}
    </div>
  );
}

