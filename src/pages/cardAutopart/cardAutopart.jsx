import "./cardAutopart.css";
import { Link } from "react-router-dom";

export default function CardAutopart({
  repuesto,
  lado_pieza,
  stock,
  marca_vehiculo,
  modelo_vehiculo,
  image,
  años_compatibles,
}) {
  return (
    <>
      <div className="cardAutopart">
        <img
          className="imageCardAutopart"
          src={image}
          alt={`Imagen de repuesto: ${repuesto} de vehiculo ${marca_vehiculo} ${modelo_vehiculo} `}
        />
        <h3 className="titleCardAutopart">
          {repuesto} {marca_vehiculo} {modelo_vehiculo} {lado_pieza}{" "}
          {años_compatibles}
        </h3>
        <p className="stockCardAutopart"> Stock disponible: {stock} </p>
        <Link to={"/"} className="btn btn-secondary btnCardAutopart">
          Ver mas información
        </Link>
      </div>
    </>
  );
}
