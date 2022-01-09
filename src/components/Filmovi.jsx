import React from 'react'
import JedanFilm from './JedanFilm'
const Filmovi = ({filmovi}) => {
    
    
    return <div className="svi-filmovi">
        {filmovi.map((fil)=>(<JedanFilm film={fil} key={fil.id} />))}
       { /*<JedanFilm film={filmovi[0]}/>
        <JedanFilm film={filmovi[1]}/>
<JedanFilm film={filmovi[2]}/>*/}
    </div>
       
    
}

export default Filmovi

