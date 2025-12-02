import React, {useState, useEffect} from "react"
import { createRoot } from "react-dom/client"
import Card from "./Card"
import ButtonMsg from "./ButtonMsg"
import "./styles.css"


const listaGier = [
 ["Minecraft","Gra survivalowa w otwartym świecie."],
 ["Cyberpunk 2077","Gra RPG w klimacie sci-fi."],
 ["The Witcher 3","Gra RPG stworzona przez CD Projekt RED."],
 ["Stardew Valley","Gra o prowadzeniu farmy."],
 ["Fortnite","Popularna gra battle royale."]
]

const listaHasel = [
 "Fun fact: Creeper powstał przez przypadek!",
 "Pamiętaj robić przerwy podczas grania!",
 "Nigdy nie rage-quituj, oddychaj :)",
 "Gry rozwijają kreatywność i logiczne myślenie."
]

function App(){


  const [wyszukiwane, ustawWyszukiwane] = useState("")
  const [wyniki, ustawWyniki] = useState(listaGier)
  const [haslo, ustawHaslo] = useState("")


useEffect(()=>{

  ustawHaslo(
  listaHasel[Math.floor(Math.random()*listaHasel.length)]
  )

 let czerwony = Math.floor(Math.random() * 200)
 let zielony = Math.floor(Math.random() * 200)
 let niebieski = Math.floor(Math.random() * 200)

let gotowyKolor = "rgb(" + czerwony + "," + zielony + "," + niebieski + ")"

document.body.style.background = gotowyKolor


},[])


useEffect(()=>{
ustawWyniki(
 listaGier.filter(x=> x[0].toLowerCase().includes(
   wyszukiwane.toLowerCase()
 ))
)
},[wyszukiwane])



return(
<div>

<h1>Portal o grach komputerowych</h1>

<p><b>Hasło dnia:</b> {haslo}</p>

<input
 placeholder="Szukaj"
 value={wyszukiwane}
 onChange={(e)=>ustawWyszukiwane(e.target.value)}
 />

<p>Liczba wyników: {wyniki.length}</p>

<ButtonMsg/>

<div>
 {wyniki.map((g,i)=>(  
   <Card key={i} nazwa={g[0]} opis={g[1]}/>
 ))}
</div>

<footer>
 <hr/>
 Projekt wykonany przez Damian Celej 
</footer>

</div>
)
}

createRoot(document.getElementById("root")).render(<App/>)
