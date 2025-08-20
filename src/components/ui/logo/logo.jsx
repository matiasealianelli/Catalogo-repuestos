import { Link } from "react-router-dom";
import "./logo.css";

export default function Logo() {
  return (
    <>
      <div>
        <Link to="/">
          <img
            className="logo"
            src="/assets/img/logoBlackMontford.png"
            alt="Logo de la tienda"
          />
        </Link>
      </div>
    </>
  );
}
