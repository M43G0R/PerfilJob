import "./Login.scss"

function login() {
  return (
    <div className="container-login">
      <form className="form" id="loginForm">
        <h2>Login</h2>

        <label for="username">Usuario</label>
        <input type="text" id="username" name="username" required />

        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Iniciar Sesión</button>

      </form>
    </div>
  );
}

export default login;
