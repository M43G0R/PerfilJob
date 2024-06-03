import "./footer.scss"

function Footer() {
  return (
    <footer class="footer">
  <div class="footer-container">
    <div class="footer-about">
      <h3>Sobre PerfilJob</h3>
      <p>PerfilJob es la plataforma que conecta a los egresados del IPN con oportunidades laborales y profesionales.</p>
    </div>
    <div class="footer-links">
      <h3>Enlaces Útiles</h3>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Sobre Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Oportunidades</a></li>
      </ul>
    </div>
    <div class="footer-contact">
      <h3>Contacto</h3>
      <p>Email: contacto@perfiljob.com</p>
      <p>Teléfono: +52 55 1234 5678</p>
    </div>
    <div class="footer-social">
      <h3>Síguenos</h3>
      <ul>
        <li>
            <a href="#">
                <img src="#" alt="Facebook"/>
            </a>
        </li>
        <li>
            <a href="#">
                <img src="#" alt="Twitter"/>
            </a>
        </li>
        <li>
            <a href="#">
                <img src="#" alt="LinkedIn"/>
            </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 PerfilJob. Todos los derechos reservados.</p>
  </div>
</footer>

  )
}

export default Footer;