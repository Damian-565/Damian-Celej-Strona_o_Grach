import React, {useState, useEffect} from "react"

export default function ButtonMsg(){

const [name, setName] = useState("")


useEffect(()=>{
 let x = localStorage.getItem("imie")
 if(x){
   setName(x)
 }
}, [])



function handleClick() {
  const w = prompt("Podaj swoje imię:")
  if (w === null || w === "") {
    alert("Błąd podaj swoje imie")
    return
  }

  localStorage.setItem("imie", w)
  setName(w)
}



function reset(){
 localStorage.removeItem("imie")
 setName("")
}

return(

  <div>
  {name
   ? <><p>Cześć, {name}!</p><button onClick={reset}>Zmień nick</button></>
   : <button onClick={handleClick}>Podaj własny nick</button>
  }
 </div>

)

}
