import "./CardAutopart.css";
import { Link } from "react-router-dom";

export default function CardAutopart({
  id,
  repuesto,
  lado_pieza,
  stock,
  marca,
  vehiculo,
  image,
  años_compatibles,
}) {
  return (
    <>
      <div key={id} className="cardAutopart">
        <img className="imageCardAutopart" src={image} alt={repuesto} />
        <h3 className="titleCardAutopart">
          {repuesto} {marca} {vehiculo} {lado_pieza} {años_compatibles}
        </h3>
        <p className="stockCardAutopart"> Stock disponible: {stock} </p>
        <button className="btn btn-secondary btnCardAutopart">Consultar al vendedor</button>
      </div>
    </>
  );
}
