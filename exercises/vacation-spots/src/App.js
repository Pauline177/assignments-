import React from 'react'
import Cards from './Cards.js'
function App(){
    let vacationSpots = [
        {
          place: "Meridian, Idaho",
          price: 40,
          timeToGo: "Spring"
        },{
          place: "Cancun",
          price: 900,
          timeToGo: "Winter"
        },{
          place: "China",
          price: 1200,
          timeToGo: "Fall"
        },{
          place: "Russia",
          price: 1100,
          timeToGo: "Summer"
        },{
          place: "Lebanon",
          price: 400,
          timeToGo: "Spring"
        }
      ]

      const mappedCards = vacationSpots.map((holiday, i) => <Cards place={holiday.place} price={holiday.price} time={holiday.timeToGo} />)
    return (
        <div>
            {mappedCards}
        </div>
    )
}
export default App