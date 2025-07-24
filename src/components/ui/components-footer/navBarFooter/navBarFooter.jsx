import LinkNav from "../../components-header/linkNav/linkNav";
import "./navBarFooter.css";
export default function NavBarFooter() {
  return (
    <>
      <div className="navBarFooter">
        <LinkNav
          className={"linkNav linkNavFooter"}
          hrefLink={"/repuestos"}
          valueLink={"Repuestos"}
        />
        <LinkNav
          className={"linkNav linkNavFooter"}
          hrefLink={"/about"}
          valueLink={"Sobre nosotros"}
        />
        <LinkNav
          className={"linkNav linkNavFooter"}
          hrefLink={"/preguntasfrecuentes"}
          valueLink={"Preguntas frecuentes"}
        />
        <LinkNav className={"linkNav linkNavFooter"} hrefLink={"#"} valueLink={"Contacto"} />
      </div>
    </>
  );
}
