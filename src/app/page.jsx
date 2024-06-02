import Image from "next/image";
import "./page.scss";

function HomePage() {
  return <>
    <div className="bodyHomePage">
      <Image 
      className="imgStudent"
      src="/images/imageStudent.jpg" 
      alt="imageStudent.jpg"
      width={900}
      height={900}
      />

      <p><b>PerfilJob</b> es una plataforma dedicada a conectar a los <b>egresados</b> del <b>Instituto Politécnico Nacional (IPN)</b> con empresas que buscan talento altamente calificado. Nuestro objetivo es <b>facilitar</b> la interacción entre profesionales y empleadores, creando <b>oportunidades</b> mutuamente beneficiosas.</p>

      <h2>¿Porque unirse a PerfilJob?</h2>
      <ul>
      PoliRed es más que una simple red social; es una comunidad de profesionales comprometidos con la excelencia y la colaboración. Aquí, los egresados del IPN pueden:
        <li>
          Crear un Perfil Profesional: Muestra tus logros académicos y profesionales, destaca tus habilidades y experiencia, y establece una presencia en línea que te represente adecuadamente en el mundo laboral.
        </li>
        <li>
          Explorar el Mercado Laboral: Encuentra oportunidades de empleo exclusivas para egresados del IPN, conectando con empresas que reconocen y valoran la formación politécnica.
        </li>
        <li>
          Colaborar en Proyectos: Únete a proyectos innovadores y colabora con otros egresados en iniciativas que buscan generar impacto en diversas industrias.
        </li>

      </ul>

    </div>
    </>
}

export default HomePage