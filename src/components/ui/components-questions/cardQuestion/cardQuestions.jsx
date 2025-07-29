import "./cardQuestion.css";

export default function CardQuestion({ question, response }) {
  return (
    <>
      <div className="cardQuestion">
        <h3 className="subtitleQuestion">
          <i className="bi bi-arrow-right-short"></i>
          {question}
        </h3>
        <p className="responseQuestion">{response}</p>
      </div>
    </>
  );
}
