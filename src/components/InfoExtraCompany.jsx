"use client";
import { useState } from "react";
import Select from "react-select";
import "./InfoExtraCompany.scss"

function InfoExtraCompany() {
  const [select, setSelect] = useState("");
  const options = [
    { value: "yes", label: "Si" },
    { value: "no", label: "No" },
  ];

  return (
    <div className="infoExtra" id="infoExtra">
      <form className="formProfile" id="formProfile">
        <h2>Completa tu perfil</h2>

        <label for="imageProfile">Actualiza la foto de perfil de tu empresa</label>
        <input
          type="text"
          id="imageProfile"
          name="imageProfile"
          placeholder="Sube tu foto"
        />

        <label for="about">Acerca de la empresa</label>
        <input
          type="text "
          id="about"
          name="about"
          placeholder="Cuenta un poco sobre ti..."
        />

        <label for="university">Nombre de la empresa</label>
        <input
          type="text "
          id="nameCompany"
          name="nameCompany"
          placeholder="Nombre de la empresa"
        />

        <label for="location">Localizacion</label>
        <input
          type="text "
          id="location"
          name="location"
          placeholder="¿Donde te encuentras?"
        />

        <label for="typeuser">¿Estas contratando?</label>
        <Select
          required
          options={options}
          onChange={(selectOption) => {
            setSelect(selectOption.value);
            console.log(select);
          }}
        />

        <button type="submit">Actualizar</button>

      </form>
    </div>
  );
}

export default InfoExtraCompany;
