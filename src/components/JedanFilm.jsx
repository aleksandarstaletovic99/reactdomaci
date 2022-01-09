import React from 'react'



function JedanFilm({film,rezervisi,otkazi,postoji}) {
   
    return (
        <div className={postoji===1 ?  "film" : "film-fil" }>
             
                 
                 <p  >{film.img}</p>
            <div className="film-body">
            
                <h3 >{film.title}</h3>
                <p >{film.description}</p>
                <br/>
                <p >Cena karte:{film.price}</p>
            </div>
            
            {postoji===1 ? (<>
            <button className="dugme"  onClick={()=>rezervisi(film.title,film.price,film.id)}>Rezervisi</button>
            <button className="dugme" onClick={()=>otkazi(film.title,film.price,film.id)}>Otkazi rezervaciju</button>
            </>):(
            <h4>Broj karata koje ste rezervisali za ovaj film:{film.amount}
            <br/>
              
            <br/>
            Cena svih rezervacija:{film.money}</h4>
            )}
            </div>
        
    )
}

export default JedanFilm
