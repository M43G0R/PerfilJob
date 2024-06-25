"use client";
import { useState } from "react";
import Select from "react-select";
import "./infoExtraStudent.scss"

function InfoExtraStudent() {
  const [select, setSelect] = useState("");
  const options = [
    { value: "yes", label: "Si" },
    { value: "no", label: "No" },
  ];

  return (
    <div className="infoExtra">
      <form className="formProfile" id="formProfile">
        <h2>Completa tu perfil</h2>

        <label for="imageProfile">Actualiza tu foto de perfil</label>
        <input
          type="text"
          id="imageProfile"
          name="imageProfile"
          placeholder="Sube tu foto"
        />

        <label for="about">Acerca de mi</label>
        <input
          type="text "
          id="about"
          name="about"
          placeholder="Cuenta un poco sobre ti..."
        />

        <label for="university">Universidad</label>
        <input
          type="text "
          id="university"
          name="university"
          placeholder="¿Donde estudiaste?"
        />

        <label for="career">Carrera</label>
        <input
          type="text "
          id="career"
          name="career"
          placeholder="¿Que carrera cursaste?"
        />

        <label for="location">Localizacion</label>
        <input
          type="text "
          id="location"
          name="location"
          placeholder="¿Donde te encuentras?"
        />

        <label for="typeuser">¿Buscas trabajo?</label>
        <Select
          required
          options={options}
          onChange={(selectOption) => {
            setSelect(selectOption.value);
            console.log(select);
          }}
        />

        <label for="experience">Experiencia</label>
        <input
          type="text "
          id="experience"
          name="experience"
          placeholder="¿Que experiencia tienes?"
        />

        <label for="skills">Conocimientos</label>
        <input
          type="text "
          id="skills"
          name="skills"
          placeholder="Conocimientos que tienes"
        />

        <button type="submit">Actualizar</button>

      </form>
    </div>
  );
}

export default InfoExtraStudent;
