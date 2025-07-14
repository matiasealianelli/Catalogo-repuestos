import { Link } from "react-router-dom";
import Layout from "../../components/layout/layout";

export default function Catalog() {
  return (
    <>
      <Layout>
        <h1>Hola soy el catalogo</h1>
        <Link to={"/"}>Home</Link>
        <br />
        <Link to={"/autoparte"}>Autoparte</Link>
      </Layout>
    </>
  );
}