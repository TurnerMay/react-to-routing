import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/People")
      .then((res) => res.json())
      .then((allPers) => setPeople(allPers))
      .catch((e) => alert(e.message));
  }, []);

  return (
    <main className="container">
        <h1 className="text-center">People</h1>
      <Link to="/">
        <button className="btn btn-primary m-2 mt-4">Home</button>
      </Link>
      <Link to="/Films">
        <button className="btn btn-primary m-2 mt-4">Films</button>
      </Link>
      <section className="row justify-content-center mt-5">
        {people.map((pers) => (
          <div className="col-md-6" key={pers.id}>
            <div className="card shadow my-2">
              <div className="card-body">
                <h4 className="card-title">{pers.name}</h4>
                <p className="card-subtitle text-muted">{`Gender: ${pers.gender}`}</p>
                <p className="card-subtitle text-muted">{`Age: ${pers.age}`}</p>
                <p className="card-subtitle text-muted">{`Eye Color: ${pers.eye_color}`}</p>
                <p className="card-subtitle text-muted">{`Hair Color: ${pers.hair_color}`}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
export default People;
