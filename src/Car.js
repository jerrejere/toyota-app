import React, { useEffect, useState } from 'react'



function Car (){
  const [
    cars,setCars
  ]=useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/cars")
    .then(res=>res.json())
    .then(data=>setCars(data))
  },[])
  const display = cars.map((element)=>{
    return(
     <div class="container">
               <div class="card ">
                   <div class="text-right"> <small>{element.id}. Carname  : {element.name}</small> </div>
                   <div class="text-right">{element.information} </div>
                   <div class="text-center mt-2 p-3"> <img src={element.image}  width="flex" height="300"/> <span class="d-block font-weight-bold">{element.price}</span>
                       <hr/>
                     </div>
               </div>
           </div>
    )
   })
   return(
     <div className="row mt-2 g-1">
      {display}
       </div>
   )
}
 
export default Car;

