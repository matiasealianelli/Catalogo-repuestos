import "./autopartDetail.css";
import { Link, useParams } from "react-router-dom";
import autopartsData from "../../../public/data/autoparts-data/autoparts.json";
import Layout from "../../components/layout/layout";
import ContentFeatureAutopart from "../../components/ui/components-autoparts/autopartsDetail/contentFeatureAutopart";

export default function AutopartDetail() {
  const { SKU } = useParams();
  const part = autopartsData.find((part) => part.SKU === SKU);
  if (!part) {
    return (<>
      <Link to={"/repuestos"} className="btn btn-light"><i class="bi bi-arrow-left-circle-fill"></i> Volver a repuestos</Link>
      <p>No se puede encontrar ningun repuesto</p>;
    </>)
  }
  return (
    <>
      <Layout>
        <section className="autopartDetail" id="autopartDetail">
          <Link to={"/repuestos"} className="btn btn-light btnBackAutoparts"><i class="bi bi-arrow-left-circle"></i> Volver a repuestos</Link>
          <div className="conteinerDetailAutopart">
            <div className="col1AutopartDetail">
              <img
                className="autopartImageDetail"
                src={part.IMAGE}
                alt={part.REPUESTO}
              />
            </div>
            <div className="col2AutopartDetail">
               <h1 className="titleDetailAutopart"> {part.REPUESTO} {part.LADO_PIEZA} {part.MARCA_VEHICULO} {part.MODELO_VEHICULO} {part.AÑOS_COMPATIBLE} </h1>
              <div className="conteinerBoxFeaturesBoxBuy">
                <div className="conteinerBuy">
                  <h2 className="priceAutopart" id="priceAutopart">$ {part.PRICE} </h2>
                  <button className="btn btn-secondary">Agregar al carrito</button>
                  <button className="btn btn-light">Consultar al vendedor</button>
                </div>  
                <div className="conteinerFeaturesAutoparts">
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
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
