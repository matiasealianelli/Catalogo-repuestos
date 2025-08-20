import "./cardAutopart.css";
import { Link } from "react-router-dom";

export default function CardAutopart({
  repuesto,
  lado_repuesto,
  stock,
  marca_vehiculo,
  modelo_vehiculo,
  image,
  años_compatibles,
  precio_repuesto,
  ID
}) {
  return (
    <>
      <Link
        to={`/repuestos/${ID}`}
        key={ID}
        title="Ver detalles del repuesto"
        className="cardAutopart">
        <img
          className="imageCardAutopart"
          src={image}
          alt={`Imagen de repuesto: ${repuesto} de vehiculo ${marca_vehiculo} ${modelo_vehiculo} `}
        />
        <h3 className="titleCardAutopart">
          {repuesto} {marca_vehiculo} {modelo_vehiculo} {lado_repuesto}{" "}
          {años_compatibles}
        </h3>
        <p className="priceCardAutopart">${precio_repuesto}</p>
        <p className="stockCardAutopart"> Stock disponible: {stock} </p>
        <Link
          to={"/about"}
          title="Agregar producto al carrito"
          className="btn btn-secondary btnCardAutopart">
          Agregar al carrito
        </Link>
      </Link>
    </>
  );
}
