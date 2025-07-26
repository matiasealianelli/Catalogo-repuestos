import "../../styles/contact.css";
import FormContact from "../ui/components-contact/formContact/formContact";
import Layout from "../../components/layout/layout";

export default function Contact() {
  return (
    <>
      <Layout>
        <section id="contact" className="contact">
          <div className="contentContact">
            <h2>Contacto</h2>
            <FormContact />
          </div>
        </section>
      </Layout>
    </>
  );
}
