import React, {useState, useEffect} from "react"
import { createRoot } from "react-dom/client"
import Card from "./Card"
import ButtonMsg from "./ButtonMsg"
import "./styles.css"


const gry = [
 ["Minecraft","Gra survivalowa w otwartym świecie."],
 ["Cyberpunk 2077","Gra RPG w klimacie sci-fi."],
 ["The Witcher 3","Gra RPG stworzona przez CD Projekt RED."],
 ["Stardew Valley","Gra o prowadzeniu farmy."],
 ["Fortnite","Popularna gra battle royale."]
]

const hasla = [
 "Fun fact: Creeper powstał przez przypadek!",
 "Pamiętaj robić przerwy podczas grania!",
 "Nigdy nie rage-quituj, oddychaj :)",
 "Gry rozwijają kreatywność i logiczne myślenie."
]

function App(){


  const [szukaj,setSzukaj] = useState("")
  const [wyniki,setWyniki] = useState(gry)
  const [haslo,setHaslo] = useState("")


useEffect(()=>{

  setHaslo(
  hasla[Math.floor(Math.random()*hasla.length)]
  )

  const r = Math.floor(Math.random()*200)
  const g = Math.floor(Math.random()*200)
  const b = Math.floor(Math.random()*200)

  document.body.style.background = `rgb(${r},${g},${b})`

},[])


useEffect(()=>{
setWyniki(
 gry.filter(x=> x[0].toLowerCase().includes(
   szukaj.toLowerCase()
 ))
)
},[szukaj])



return(
<div>

<h1>Portal o grach komputerowych</h1>

<p><b>Hasło dnia:</b> {haslo}</p>

<input
 placeholder="Szukaj gry..."
 value={szukaj}
 onChange={(e)=>setSzukaj(e.target.value)}
 />

<p>Liczba wyników: {wyniki.length}</p>

<ButtonMsg/>

<div>
 {wyniki.map((g,i)=>(
   <Card key={i} title={g[0]} desc={g[1]}/>
 ))}
</div>

<footer>
 <hr/>
 Projekt wykonany przez Damian Celej ({new Date().getFullYear()})
</footer>

</div>
)
}

createRoot(document.getElementById("root")).render(<App/>)
