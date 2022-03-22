import {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'


const FilmDetails = () => {

   
        const { Filmid } = useParams()

        const [details, setDetails] = useState(null)

        useEffect(() => {
            fetch('https://ghibliapi.herokuapp.com/Films/' + Filmid)
            .then(res => res.json() )
            .then(allFilms => setDetails(allFilms))
            .catch(e => alert(e.message))
          
        }, [Filmid])

        
    


    return(
        <section className="row justify-content-center">
        <div className="col-md-6">
              <Link to="/Films">
            <button className="btn btn-primary m-2">Films</button>
          </Link>
          <Link to="/People">
            <button className="btn btn-primary m-2">People</button>
          </Link>
          <Link to="/">
            <button className="btn btn-primary m-2">Home</button>
          </Link>
            <div className="card shadow rounded">
            <img className="card-img-top" src={details && details.movie_banner} alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title">{details && details.title}</h4>
                    <p className="card-subtitle text-muted">{details && details.director}</p>
                    <p className="card-subtitle text-muted">{details && details.producer}</p>
                    <p className="card-subtitle text-muted">{details && details.original_title}</p>
                    <p className="card-subtitle text-muted">{details && details.release_date}</p>
                    <p className="card-text">{details && details.description}</p>
                  

                </div>
            </div>
        </div>
        </section>

    )
}

export default FilmDetails