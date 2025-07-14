import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Hola soy el Home</h1>
      <Link to={"/catalogo"}>Catalogo</Link>
    </>
  );
}

//path param
