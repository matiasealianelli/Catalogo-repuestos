import { Link } from "react-router-dom";
import "./linkNav.css";

export default function LinkNav({ hrefLink, className, valueLink }) {
  return (
    <>
      <Link to={hrefLink} className={ className }>
        {valueLink}
      </Link>
    </>
  );
}
