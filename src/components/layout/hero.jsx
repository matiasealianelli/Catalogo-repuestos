import "../../styles/hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LogoVw from "../ui/logosBrands/logoVw";
import LogoFord from "../ui/logosBrands/logoFord";
import LogoChevrolet from "../ui/logosBrands/logoChevrolet";
import BtnLinkAutoparts from "../ui/components-hero/btnLinkAutoparts/btnLinkAutoparts";
export default function Hero() {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        scrollbar={{ draggable: true }}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={true}
        Navigation={true}
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // 768: {
          //   slidesPerView: 1,
          //   spaceBetween: 40,
          // },
          // 1024: {
          //   slidesPerView: 1,
          //   spaceBetween: 50,
          // },
        }}
        loop={true}
        Pagination={{
          clickable: true,
        }}
        navigation={true}
        // className="mySwiper"
      >
        <SwiperSlide className="slideHero1">
          <div className="conteinerInfoSlide">
            <h1 className="titleSlideHero">Venta de repuestos originales</h1>
            <p className="textSlideHero">
              En Montford vas a encontrar la mejor calidad
            </p>
            <BtnLinkAutoparts title={"Ir al catalogo de repuestos"} toLink={'/repuestos'} description={"Ver repuestos"}/>
          </div>
          <div className="conteinerLogosBrands">
            <LogoFord />
            <LogoVw />
            <LogoChevrolet />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slideHero2">
          <div className="conteinerInfoRedesHero">
            <h1 className="titleSlideHero">Contactate con nosotros</h1>
            <p className="textSlideHero">Comunicate con nosotros mediante nuestro WhatsApp para una cotizacion personalizada:</p>
            <BtnLinkAutoparts title={"Haz click"} toLink={'https://wa.link/zewxwl'} description={"Contactanos"} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
