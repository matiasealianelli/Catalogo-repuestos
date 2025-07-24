import "../../styles/about.css";
import Layout from "../../components/layout/layout";

export default function About() {
  return (
    <>
      <Layout>
        <section id="about" className="about">
          <div className="conteinerTextsAbout">
            <h2 className="titleAbout">Sobre nosotros</h2>
            <p className="textAbout pt-5">
              Montford es una empresa con trayectoria en el rubro automotor,
              fundada en 1995 como parte de una sede de la reconocida
              concesionaria y distribuidora de repuestos Montesano Automotores.
              A partir de la expansión de la franquicia, nació Montford,
              especializándose en la venta de repuestos para vehículos Ford,
              Volkswagen y Chevrolet.
            </p>
            <p className="textAbout">
              Nos enfocamos principalmente en carrocería y autopartes estéticas,
              dejando de lado los componentes del motor para brindar un servicio
              más ágil y especializado.
            </p>
            <p className="textAbout">
              Actualmente operamos exclusivamente de forma online, llevando los
              repuestos directamente a la puerta de nuestros clientes. Con solo
              un clic, facilitamos la compra y gestión de productos, apostando
              por la comodidad, rapidez y confianza en cada envío.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}
