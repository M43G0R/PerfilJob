import "./SignUp.scss"

function signUp() {
  return (
    <div className="container-signup">
        <form className="form" id="signupForm">
            <h2>Signup</h2>
            <label for="name">Nombre(s)</label>
            <input type="text" id="name" name="name" required/>

            <label for="name">Apellidos</label>
            <input type="text" id="lastname" name="lastname" required/>
            
            <label for="username">Usuario</label>
            <input type="text" id="username" name="username" required/>
            
            <label for="password">Contraseña</label>
            <input type="password" id="password" name="password" required/>
            
            <label for="userType">Tipo de usuario</label>
            <select id="userType" name="userType" required>
                <option value="student">Estudiante</option>
                <option value="company">Empresa</option>
            </select>
            
            <label for="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" required/>
            
            <button type="submit">Registrarse</button>
        </form>
    </div>
  )
}

export default signUp