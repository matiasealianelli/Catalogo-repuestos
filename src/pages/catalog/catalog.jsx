import "./catalog.css";
import Layout from "../../components/layout/layout";
import Autoparts from "../../../data/autoparts.json";
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
            {dataAutoparts.map((autopart) => (
              <CardAutopart
                ID={autopart.ID}
                repuesto={autopart.REPUESTO}
                lado_repuesto={autopart.LADO_REPUESTO}
                stock={autopart.STOCK}
                marca_vehiculo={autopart.MARCA_VEHICULO}
                modelo_vehiculo={autopart.MODELO_VEHICULO}
                años_compatibles={autopart.AÑOS_COMPATIBLE}
                image={autopart.CARD_IMAGE}
                precio_repuesto={autopart.PRICE}
              />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
