import "./autopartDetail.css";
import { Link, useParams } from "react-router-dom";
import autopartsData from "../../../public/data/autoparts-data/autoparts.json";
import Layout from "../../components/layout/layout";
import ContentFeatureAutopart from "../../components/ui/components-autoparts/autopartsDetail/contentFeatureAutopart";

export default function AutopartDetail() {
  const { SKU } = useParams();
  const part = autopartsData.find((part) => part.SKU === SKU);
  if (!part) {
    return <p>No se puede encontrar ningun repuesto</p>;
  }
  return (
    <>
      <Layout>
        <section className="autopartDetail" id="autopartDetail">
          <div className="conteinerDetailAutopart">
            <div>
              <img
                className="autopartImageDetail"
                src={part.IMAGE}
                alt={part.REPUESTO}
              />
            </div>
            <div className="conteinerFeaturesAutoparts">
              <h1 className="titleDetailAutopart"> {part.REPUESTO} {part.LADO_PIEZA} {part.MARCA_REPUESTO} {part.CARACTERISTICAS_EXTRA} {part.MARCA_VEHICULO} {part.MODELO_VEHICULO} {part.AÑOS_COMPATIBLE} </h1>
              <ContentFeatureAutopart property={"SKU"} value={part.SKU} />
              <ContentFeatureAutopart property={"Marca repuesto"} value={part.MARCA_REPUESTO} />
              <ContentFeatureAutopart property={"Repuesto"} value={part.REPUESTO} />
              <ContentFeatureAutopart property={"Stock disponible"} value={part.STOCK} />
              <ContentFeatureAutopart property={"Lado pieza"} value={part.LADO_PIEZA} />
              <ContentFeatureAutopart property={"Vehiculo"} value={part.MARCA_VEHICULO} />
              <ContentFeatureAutopart property={"Modelo vehiculo"} value={part.MODELO_VEHICULO} />
              <ContentFeatureAutopart property={"Años compatible"} value={part.AÑOS_COMPATIBLE} />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
