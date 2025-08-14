import { useParams } from "react-router-dom";
import autopartsData from "../../../public/data/autoparts-data/autoparts.json";
import Layout from "../../components/layout/layout";
import "./autopartDetail.css";

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
          <h1>Detalle del repuesto:</h1>
          <div className="conteinerDetailAutopart">
           
            <div>
              <img
                className="autopartImageDetail"
                src={part.IMAGE}
                alt={part.REPUESTO}
              />
            </div>
            <div className="conteinerFeaturesAutoparts">
              <div className="contentFeatureAutopart">
                <h6 className="featureAutopart">SKU:</h6>{" "}
                <p className="featureAutopart">{part.SKU}</p>
              </div>
              <div className="contentFeatureAutopart">
                <h6 className="featureAutopart">Nombre:</h6>{" "}
                <p className="featureAutopart">{part.REPUESTO}</p>
              </div>
              <div className="contentFeatureAutopart">
                {" "}
                <h6 className="featureAutopart">Lado de la pieza:</h6>{" "}
                <p className="featureAutopart">{part.LADO_PIEZA}</p>
              </div>
              <div className="contentFeatureAutopart">
                {" "}
                <h6 className="featureAutopart">Stock:</h6>{" "}
                <p className="featureAutopart">{part.STOCK}</p>
              </div>
              <div className="contentFeatureAutopart">
                {" "}
                <h6 className="featureAutopart">Marca vehículo:</h6>{" "}
                <p className="featureAutopart">{part.MARCA_VEHICULO}</p>
              </div>
              <div className="contentFeatureAutopart">
                {" "}
                <h6 className="featureAutopart">Modelo vehículo:</h6>{" "}
                <p className="featureAutopart">{part.MODELO_VEHICULO}</p>
              </div>
              <div className="contentFeatureAutopart">
                <h6 className="featureAutopart">Años compatibles:</h6>{" "}
                <p className="featureAutopart">{part.AÑOS_COMPATIBLE}</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
