import React from 'react'



function JedanFilm({film}) {
   
    return (
            
             <div className="film">
                 
                 <p  >{film.img}</p>
            <div className="film-body">
            
                <h3 >{film.title}</h3>
                <p >{film.description}</p>
                <br/>
                <p >Cena karte:{film.price}</p>
            </div>
            
            
            <button className="dugme" >Rezervisi</button>
            <button className="dugme" >Otkazi rezervaciju</button>
            
            <h4>Broj karata koje ste rezervisali za ovaj film:{film.amount}
            <br/>
              
            <br/>
            Cena svih rezervacija:{film.money}</h4>
            
            </div>
        
    )
}

export default JedanFilm
