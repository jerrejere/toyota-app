import React from 'react'

export default function Car(){
  const Car = [
    {
      "id": 1,
      "name": "Toyota Avalon",
      "price": " Ksh. 5.2M",
      "information": "Explore the 2022 Toyota Avalon on the official Toyota site. Find this full-size sedan at a Toyota dealership near you, or build and price your own online ",
      "image": "https://images.hgmsites.net/lrg/toyota-avalon_100803909_l.jpg"
    },
    {
      "id": 2,
      "name": "Toyota Corolla",
      "price": "Ksh. 4.3M",
      "information": "The Toyota Corolla is a series of compact cars (formerly subcompact) manufactured and marketed globally by the Toyota Motor Corporation.",
      "image": "https://topcar.co.ke/wp-content/uploads/2020/06/Toyota-Corolla-Altis.jpg"
    },
    {
      "id": 3,
      "name": "Toyota 86",
      "price": " Ksh. 16M",
      "information": "2020 Toyota 86 ; Fuel Economy: 24 / 32 mpg ; Duncan Brady. The 86 has a funny history. It was introduced for 2013 as the Scion FR-S, sister car to the Subaru BRZ",
      
      "image": "https://www.motortrend.com/uploads/sites/5/2021/08/2022-Toyota-GR-86-2.jpg"
    },
    {
      "id": 4,
      "name": "Toyota Sienna",
      "price": " Ksh. 2.4M",
      "information": "Explore the 2022 Toyota Sienna on the official Toyota site. Find this Toyota minivan at a dealership near you, or build and price your own online today",
      "image": "https://media.ed.edmunds-media.com/toyota/sienna/2023/hero/2023_toyota_sienna_prf_hero_51822001_1600.jpg"
    }
  ]
  const display = Car.map((element)=>{
    return(
     <div class="col-md-3">
               <div class="card p-2">
                   <div class="text-right"> <small>{element.id}. Carname  : {element.name}</small> </div>
                   <div class="text-right"> <small>{element.information}. </small> </div>
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
console.log(Car)
