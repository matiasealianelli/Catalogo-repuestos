import "../../styles/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../ui/logo/logo";
import NavBarHeader from "../ui/components-header/navBarHeader/navBarHeader";
import BtnCart from "../ui/components-header/btnCart/btnCart";
import InputSearch from "../ui/barSearch/inputSearch/inputSearch";
import BtnSearch from "../ui/barSearch/btnSearch/btnSearch";
import BtnMenuClose from "../ui/components-header/btnCloseMenu/btnMenuClose";
import BtnMenu from "../ui/components-header/btnMenuBurguer/btnMenu";
import { useState } from "react";
import BtnSignIn from "../../pages/auth/btnSignIn/btnSignIn";

export default function Header() {
  const [menuActivo, setMenuActivo] = useState(false);
  return (
    <>
      <header className="navbar-expand-lg">
        <div className=" bg-body-tertiary border-bottom conteinerColsNav">
          <Logo />
          {!menuActivo && (
            <BtnMenu
              className={menuActivo ? "visible" : "hidden"}
              onOpen={() => setMenuActivo(true)}
            />
          )}
          {menuActivo && (
            <>
              <BtnMenuClose
                className={menuActivo ? "visible" : "hidden"}
                onClose={() => setMenuActivo(false)}
              />
            </>
          )}
          <div
            className={menuActivo ? "conteinerCol2 active" : "conteinerCol2"}>
            <NavBarHeader
              className={
                menuActivo
                  ? "nav-bar active"
                  : "nav-bar nav justify-content-space-around "
              }
            />
          </div>
          <BtnCart className={!menuActivo ? "btnCart active" : "btnCart"} />
        </div>
        {/* <div className="py-3 border-bottom">
          <div className="container d-flex flex-wrap justify-content-center">
            <form
              className="d-flex col-12 col-lg-5 mb-lg-0 gap-4"
              role="search">
              <InputSearch />
              <BtnSearch />
            </form>
          </div>
        </div> */}
      </header>
    </>
  );
}
