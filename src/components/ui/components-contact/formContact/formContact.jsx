import "./formContact.css";
import { useState } from "react";
import InputContact from "../inputContact/inputContact";
import TextareaContact from "../textareaContact/textareaContact";
import BtnContact from "../btnContact/btnContact";
export default function FormContact() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputTextarea, setInputTextarea] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      inputName.trim() === "" ||
      inputEmail.trim() === "" ||
      inputPhone.trim() === "" ||
      inputTextarea.trim() === ""
    ) {
      return alert("Por favor completa todos los campos.");
    } else {
      alert("Tu mensaje fue enviado correctamente");
      console.log({
        inputName,
        inputEmail,
        inputPhone,
        inputTextarea,
      });
      setInputName("");
      setInputEmail("");
      setInputPhone("");
      setInputTextarea("");
    }
  };
  return (
    <>
      <form className="conteinerForm" onSubmit={handleSubmitForm}>
        <div className="row g-3 conteinerFormContact">
          <InputContact
            nameLabel={"Nombre"}
            typeInput={"text"}
            setValue={setInputName}
            valueState={inputName}
          />
          <InputContact
            nameLabel={"Email"}
            typeInput={"email"}
            setValue={setInputEmail}
            valueState={inputEmail}
          />
          <InputContact
            nameLabel={"Telefono"}
            typeInput={"number"}
            setValue={setInputPhone}
            valueState={inputPhone}
          />
          <TextareaContact
            valueState={inputTextarea}
            setValue={setInputTextarea}
          />
          <div className="conteiner-btns-form">
            <BtnContact onClickEvent={handleSubmitForm} />
          </div>
        </div>
      </form>
    </>
  );
}
