import "./btnLinkAutoparts.css";
import { Link } from "react-router-dom";

export default function BtnLinkAutoparts({ description, title ,toLink }) {
  return (
    <>
      <Link title={title} className="btnLinkAutoparts" to={toLink}>
        {description}
      </Link>
    </>
  );
}
