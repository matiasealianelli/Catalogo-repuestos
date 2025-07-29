import CardQuestion from "../ui/components-questions/cardQuestion/cardQuestions";
import Layout from "./layout";
import "../../styles/questions.css";
export default function Questions() {
  return (
    <>
      <Layout>
        <section id="questions" className="questions">
          <div className="conteinerQuestions ">
            <h2>Preguntas frecuentes</h2>
            <div className="layoutQuestions pt-5">
              <CardQuestion
                question={
                  "¿Cómo me comunico con Montford si tengo una duda sobre un repuesto?"
                }
                response={
                  "Podés escribirnos directamente por WhatsApp y te respondemos lo antes posible. Brindamos atención personalizada para ayudarte a encontrar el repuesto que necesitás."
                }
              />
              <CardQuestion
                question={"¿Cuáles son los horarios de atención?"}
                response={
                  "Respondemos consultas de lunes a viernes de 9:00 a 18:00 hs y los sábados de 9:00 a 13:00 hs. Si escribís fuera de horario, te responderemos a la brevedad el siguiente día hábil."
                }
              />
              <CardQuestion
                question={"¿Hacen envíos a todo el país?"}
                response={
                  "Sí, realizamos envíos a todo el territorio argentino a través de correo. Para domicilios dentro de CABA y AMBA, la entrega se realiza dentro de los 3 días hábiles posteriores a la compra. En el caso del interior del país, los envíos pueden demorar entre 5 a 10 días hábiles, dependiendo de la ubicación. Una vez confirmado el pedido, te enviaremos el número de seguimiento para que puedas consultar el estado de tu envío en todo momento."
                }
              />
              <CardQuestion
                question={"¿Puedo retirar el repuesto personalmente?"}
                response={
                  "Si, de ser necesario como ultimo recurso podemos poner un punto de encuentro y se le entregaria el pedido."
                }
              />
              <CardQuestion
                question={"¿Qué tipo de repuestos venden?"}
                response={
                  "Nos especializamos en repuestos de carrocería y autopartes estéticas para Ford, Volkswagen y Chevrolet. No trabajamos con partes de motor o mecánica pesada."
                }
              />
              <CardQuestion
                question={
                  " ¿Cómo sé si el repuesto es compatible con mi vehículo?"
                }
                response={
                  "En cada publicación vas a encontrar el modelo, año y detalles del repuesto. Si tenés dudas, podés consultarnos por WhatsApp y te asesoramos sin compromiso."
                }
              />
              <CardQuestion
                question={" ¿Aceptan devoluciones o cambios?"}
                response={
                  "No, no aceptamos devoluciones. Si, aceptamos cambios dentro de los 7 días posteriores a la recepción del producto, siempre que el repuesto no haya sido utilizado ni dañado. Te pedimos que nos contactes para coordinar el proceso. De todas maneras nos encargamos de que compren el repuesto correspondiente, asesorandolos personalmente."
                }
              />
              <CardQuestion
                question={" ¿Qué medios de pago aceptan?"}
                response={
                  "Aceptamos tarjetas de crédito, débito, transferencias bancarias y pagos a través de plataformas como Mercado Pago."
                }
              />
              <CardQuestion
                question={"¿Cómo sé si mi compra fue confirmada?"}
                response={
                  "Luego de realizar la compra, te contactaremos por WhatsApp para confirmar los detalles y coordinar el envío."
                }
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
