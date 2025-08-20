import "./autopartDetail.css";
import { Link, useParams } from "react-router-dom";
import autoparts from "../../../data/autoparts.json";
import Layout from "../../components/layout/layout";
import ContentFeatureAutopart from "../../components/ui/components-autoparts/autopartsDetail/contentFeatureAutopart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AutopartDetail() {
  const { ID } = useParams();
  const autopart = autoparts.find((autopart) => autopart.ID === ID);
  if (!autopart) {
    return (
      <>
        <Link to={"/repuestos"} className="btn btn-light">
          <i className="bi bi-arrow-left-circle"></i> Volver
        </Link>
        <p>No se puede encontrar ningun repuesto</p>
      </>
    );
  }
  return (
    <>
      <Layout>
        <section className="autopartDetail" id="autopartDetail">
          <div className="conteinerBtnBackAutoparts">
            <Link to={"/repuestos"} className="btn btn-light btnBackAutoparts">
              <i className="bi bi-arrow-left-circle"></i> Volver
            </Link>
          </div>
          <div className="conteinerDetailAutopart">
            <Swiper
              className="col1AutopartDetail"
              modules={[Pagination, Navigation]}
              scrollbar={{ draggable: true }}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={true}
              Navigation={true}
              loop={true}
              Pagination={{
                clickable: true,
              }}
              navigation={true}>
              {autopart
                ? autopart.IMAGES.map((image, index) => (
                    <SwiperSlide className="conteinerSlide">
                      <img
                        className="autopartImageDetail"
                        key={index}
                        src={image}
                        alt=""
                      />
                    </SwiperSlide>
                  ))
                : "/assets/img/no-image.png"}
            </Swiper>
            <div className="col2AutopartDetail">
              <h1 className="titleDetailAutopart">
                {" "}
                {autopart.REPUESTO} {autopart.LADO_REPUESTO}{" "}
                {autopart.MARCA_VEHICULO} {autopart.MODELO_VEHICULO}{" "}
                {autopart.AÑOS_COMPATIBLE}{" "}
              </h1>
              <div className="conteinerFeaturesBuy">
                <div className="conteinerBuy">
                  <h2 className="priceAutopart" id="priceAutopart">
                    $ {autopart.PRICE}{" "}
                  </h2>
                  <button className="btn btn-secondary">
                    Agregar al carrito
                  </button>
                  <button className="btn btn-light">
                    Consultar al vendedor
                  </button>
                </div>
                <div className="conteinerFeaturesAutoparts">
                  <ContentFeatureAutopart
                    property={"SKU"}
                    value={autopart.SKU}
                  />
                  <ContentFeatureAutopart
                    property={"Marca repuesto"}
                    value={autopart.MARCA_REPUESTO}
                  />
                  <ContentFeatureAutopart
                    property={"Repuesto"}
                    value={autopart.REPUESTO}
                  />
                  <ContentFeatureAutopart
                    property={"Stock disponible"}
                    value={autopart.STOCK}
                  />
                  <ContentFeatureAutopart
                    property={"Lado pieza"}
                    value={autopart.LADO_REPUESTO}
                  />
                  <ContentFeatureAutopart
                    property={"Vehiculo"}
                    value={autopart.MARCA_VEHICULO}
                  />
                  <ContentFeatureAutopart
                    property={"Modelo vehiculo"}
                    value={autopart.MODELO_VEHICULO}
                  />
                  <ContentFeatureAutopart
                    property={"Años compatible"}
                    value={autopart.AÑOS_COMPATIBLE}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
