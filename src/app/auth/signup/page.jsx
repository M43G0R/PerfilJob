"use client"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import Select from "react-select"
import { useState } from "react"

import "./SignUp.scss"

function SignUp() {

  const [select, setSelect] = useState("")
  const options = [
    { value: "student", label: "Estudiante" },
    { value: "company", label: "Empresa" }
  ]

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter()

  const onSubmit = handleSubmit(async (data) => {

    //console.log("Type User: " + data.typeuser)

    if (data.password == !data.confirmPassword) {
      return alert("Passwords do not match")
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        lastname: data.lastname,
        username: data.username,
        email: data.email,
        password: data.password,
        typeuser: select
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });



    if (res.ok) {
      router.push("/auth/login")
    }

  });

  return (
    <div className="container-signup">
      <form className="form" id="signupForm" onSubmit={onSubmit}>
        <h2>Sign up</h2>
        <label for="name">Nombre(s)</label>
        <input type="text" id="name" name="name" placeholder="Eduardo" {...register("name", {
          required: {
            value: true,
            message: "Nombre es requerido",
          },
        })} />
        {errors.name && (
          <span>{errors.name.message}</span>
        )}

        <label for="name">Apellidos</label>
        <input type="text" id="lastname" name="lastname" placeholder="Perez Dominguez" {...register("lastname", {
          required: {
            value: true,
            message: "Apellidos es requerido",
          },
        })} />
        {errors.lastname && (
          <span>{errors.lastname.message}</span>
        )}

        <label for="username">Usuario</label>
        <input type="text" id="username" name="username" placeholder="Username123" {...register("username", {
          required: {
            value: true,
            message: "Usuario es requerido",
          },
        })} />
        {errors.username && (
          <span>{errors.username.message}</span>
        )}

        <label for="email">Correo Electrónico</label>
        <input type="email" id="email" name="email" placeholder="email@email.com" {...register("email", {
          required: {
            value: true,
            message: "Email es requerido",
          },
        })} />
        {errors.email && (
          <span>{errors.email.message}</span>
        )}

        <label for="typeuser">Tipo de usuario</label>
        <Select
          required
          options={options}
          onChange={(selectOption) => {
            setSelect(selectOption.value)
            console.log(select)
          }}
        />

        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password" placeholder="contra123" {...register("password", {
          required: {
            value: true,
            message: "Contraseña es requerido",
          },
        })} />
        {errors.password && (
          <span>{errors.password.message}</span>
        )}

        <label for="confirmPassword">Confirma contraseña</label>
        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="contra123" {...register("confirmPassword", {
          required: {
            value: true,
            message: "Confirma contraseña es requerido",
          },
        })} />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}

        <button type="submit">Registrarse</button>
      </form>
    </div>
  )
}

export default SignUp