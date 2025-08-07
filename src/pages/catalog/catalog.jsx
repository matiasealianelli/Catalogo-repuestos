import "./catalog.css";
import Layout from "../../components/layout/layout";
import Autoparts from "../../../public/data/autoparts-data/autoparts.json";
import CardAutopart from "../cardAutopart/cardAutopart.jsx";
import { useEffect, useState } from "react";

export default function Catalog() {
  const [dataAutoparts, setDataAutoparts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setDataAutoparts(Autoparts);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, []);
  if (loading) {
    return <div>Cargando repuestos...</div>;
  }

  if (error) {
    return <div>Error al cargar los repuestos: {error.message}</div>;
  }
  if (!dataAutoparts) {
    return <div>No hay datos de repuestos disponibles.</div>;
  }
  return (
    <>
      <Layout>
        <section id="catalog" className="catalog pt-5">
          <h2 className="titleCatalog pb-5">Catalogo</h2>
          <div className="conteinerCardsAutoparts">
            {dataAutoparts.map((part) => (
              <CardAutopart
                key={part.ID}
                repuesto={part.REPUESTO}
                lado_pieza={part.LADO_PIEZA}
                stock={part.STOCK}
                marca_vehiculo={part.MARCA_VEHICULO}
                modelo_vehiculo={part.MODELO_VEHICULO}
                años_compatibles={part.AÑOS_COMPATIBLE}
                image={part.IMAGE}
              />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
