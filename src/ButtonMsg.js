import React, {useState, useEffect} from "react"

export default function ButtonMsg(){

const [imie, ustawImie] = useState("")

useEffect(()=>{
 let zapisaneImie = localStorage.getItem("imie")
 if(zapisaneImie){
   ustawImie(zapisaneImie)
 }
}, [])



function obsluzKlikniecie() {
  const wpisaneImie = prompt("Podaj swoje imię:")
  if (wpisaneImie === null || wpisaneImie === "") {
    alert("Błąd podaj swoje imie")
    return
  }

  localStorage.setItem("imie", wpisaneImie)
  ustawImie(wpisaneImie)
}



function resetuj(){
 localStorage.removeItem("imie")
 ustawImie("")
}

return(

  <div>
  {imie
   ? <><p>Cześć, {imie}!</p><button onClick={resetuj}>Zmień nick</button></>
   : <button onClick={obsluzKlikniecie}>Podaj własny nick</button>
  }
 </div>

)

}