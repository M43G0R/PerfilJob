"use client"
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useState } from "react"
import "./Login.scss"


function Login() {

  const router = useRouter()

  const [error, setError] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    //console.log("this is data: ", data);

    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    //console.log("this is res ", res);

    if (res.error) {
      setError(res.error);
      //console.log("Hay un error aqui");
    } else {

      const idProfile = null

      router.push(`/user/profile`);
      router.refresh()
    }
  });

  return (
    <div className="container-login">
      <form className="form" onSubmit={onSubmit} id="loginForm">
        {error && (
          <p>{error}</p>
        )}
        <h2>Login</h2>

        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="ejemplo@ejemplo.com" {...register("email", {
          required: {
            value: true,
            message: "Email is required",
          },
        })} />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}

        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password" placeholder="*****" {...register("password", {
          required: {
            value: true,
            message: "Password is required",
          },
        })} />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}

        <button type="submit">Iniciar Sesión</button>

      </form>
    </div>
  );
}

export default Login;
