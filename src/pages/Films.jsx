import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react'



const Films = () => {

    const [films, setFilms] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/Films')
        .then(res => res.json() )
        .then(allFilms => setFilms(allFilms))
        .catch(e => alert(e.message))
      
    }, [])




  return (
    <main className="container">
        <h1 className="text-center">Films</h1>
      <Link to="/">
            <button className="btn btn-primary m-2 mt-4">Home</button>
          </Link>
          <Link to="/People">
            <button className="btn btn-primary m-2 mt-4">People</button>
          </Link>
      <section className="row justify-content-center mt-5">
      
          {films.map(film => (
        <div className="col-md-6" key={film.id}>
            <img className="card-img-top" src={film.movie_banner} alt="Card image cap"/>
          <div className="card shadow my-2">
              <div className="card-body">
                  <h4 className="card-title">{film.title}</h4>
                  <p className="card-subtitle text-muted">{film.director}</p>
                  <p className="card-text">{film.description}</p>
                  <p><Link to={`/Films/${film.id}`} className="btn btn-outline-primary">Full Details</Link></p>
              </div>
          </div>
        </div>
          ))}
      </section>
    </main>
  );
};

export default Films;
