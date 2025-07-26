import "./textareaContact.css";
export default function TextareaContact({ valueState, setValue }) {
  return (
    <>
      <label htmlFor="textarea-msj">
        Escribir un mensaje
        <textarea
          className="form-control input-form"
          name="textarea-msj"
          id="textarea-msj"
          value={valueState}
          onChange={(e) => setValue(e.target.value)}></textarea>
      </label>
    </>
  );
}
