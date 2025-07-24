import LinkNav from "../linkNav/linkNav";
import "./navBarHeader.css";

export default function NavBarHeader({ className }) {
  return (
    <>
      <nav className={className}>
        {" "}
        <LinkNav
          className={"linkNav"}
          hrefLink={"/repuestos"}
          valueLink={"Repuestos"}
        />
        <LinkNav
          className={"linkNav"}
          hrefLink={"/about"}
          valueLink={"Sobre nosotros"}
        />
        <LinkNav
          className={"linkNav"}
          hrefLink={"/preguntasfrecuentes"}
          valueLink={"Preguntas frecuentes"}
        />
        <LinkNav className={"linkNav"} hrefLink={"#"} valueLink={"Contacto"} />
      </nav>
    </>
  );
}
