import React from "react"


export default function Card({nazwa, opis}){

return(

 <div className="card">
   <h3>{nazwa}</h3>
   <p>{opis}</p>
 </div>
)

}
