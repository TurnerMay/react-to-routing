import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="text-center">
      <section className="row justify-content-center">
        <div >
        <img className="w-25" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dcb3fcda-5925-491b-b841-334e641965cb/d95wnnl-fc911c55-de09-4817-b6b2-427cc63581c1.jpg/v1/fill/w_900,h_507,q_75,strp/studio_ghibli_logo_by_schneefuechsin_d95wnnl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTA3IiwicGF0aCI6IlwvZlwvZGNiM2ZjZGEtNTkyNS00OTFiLWI4NDEtMzM0ZTY0MTk2NWNiXC9kOTV3bm5sLWZjOTExYzU1LWRlMDktNDgxNy1iNmIyLTQyN2NjNjM1ODFjMS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.7ZFkQwLGEqJdwJ8QcMLw4pDUAReMCh-qdPeieyTPOZ8" alt=""  />
          <h1 className="text-center">Home Page</h1>
          <Link to="/Films">
            <button className="text-center btn btn-primary m-2">Films</button>
          </Link>
          <Link to="/People">
            <button className="btn btn-primary m-2">People</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
