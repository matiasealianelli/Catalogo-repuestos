import { Link } from "react-router-dom";
import Layout from "../../components/layout/layout";

export default function Autopart() {
  return (
    <>
      <Layout>
        <p>Hola Soy La autoparte</p>
        <Link to={"/catalogo"}>Volver</Link>
      </Layout>
    </>
  );
}
