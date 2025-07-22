import "./socialNetworksFooter.css";

export default function SocialNetworksFooter() {
  return (
    <>
      <h5>Canales de comunicación</h5>
      <div className="socialNetworksFooter">
        <a className="linkSocNetFooter" href="/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-whatsapp linkSocNetFooter"></i>
        </a>
        <a className="linkSocNetFooter" href="/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram linkSocNetFooter"></i>
        </a>
        <a className="linkSocNetFooter" href="/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook linkSocNetFooter"></i>
        </a>
      </div>
    </>
  );
}
