
import JedanFilm from './JedanFilm'

const Rezervacije = ({filmovi}) => {
    return (
        <div className='rezervacije'>
            <h1>Rezervacije:</h1>
            {filmovi.map((fil)=>
            (<JedanFilm film={fil} key={fil.id} />))}
        </div>
    )
}

export default Rezervacije