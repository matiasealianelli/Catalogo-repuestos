import "../../styles/footer.css";
import NavBarFooter from "../ui/components-footer/navBarFooter/navBarFooter";
import SocialNetworksFooter from "../ui/components-footer/socialNetworksFooter/socialNetworksFooter";
import Logo from "../ui/logo/logo";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="conteinerColsFooter">
          <NavBarFooter />
          <div className="col2Footer">
            <SocialNetworksFooter />
            <Logo />
          </div>
        </div>
        <p className="nav-footer-copyright">
          ©&nbsp; Copyright Montford 1997-2025
        </p>
      </footer>
    </>
  );
}
