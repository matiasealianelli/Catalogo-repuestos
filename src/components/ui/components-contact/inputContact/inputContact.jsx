import "./inputContact.css";
export default function InputContact({ nameLabel, typeInput, valueState, setValue }) {
  return (
    <>
      <div className="col-12">
        <label
          htmlFor={nameLabel}
          className="form-label conteiner-lbl-input-form">
          {nameLabel}
          <input
            type={typeInput}
            className="form-control input-form"
            name={nameLabel}
            id={nameLabel}
            required
            value={valueState}
            autoComplete={valueState.toString()}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
      </div>
    </>
  );
}
