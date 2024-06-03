import Image from "next/image";
import "./page.scss";

function HomePage() {
  return <>

    <div className="bodyHomePage">
        <Image 
        className="imgStudent element"
        src="/images/imageStudent.jpg" 
        alt="imageStudent.jpg"
        width={900}
        height={900}
        />

      <p className="element"><b>PerfilJob</b> es una plataforma dedicada a conectar a los <b>egresados</b> del <b>Instituto Politécnico Nacional (IPN)</b> con empresas que buscan talento altamente calificado. Nuestro objetivo es <b>facilitar</b> la interacción entre profesionales y empleadores, creando <b>oportunidades</b> mutuamente beneficiosas.</p>

      <h1 className="element">¿Porque unirse a PerfilJob?</h1>
      <ul className="element"><p>PerfilJob es más que una simple red social; es una comunidad de profesionales comprometidos con la excelencia y la colaboración. Aquí, los egresados del IPN pueden:</p>
        <li>
          <p><b>Crear un Perfil Profesional:</b> Muestra tus logros académicos y profesionales, destaca tus habilidades y experiencia, y establece una presencia en línea que te represente adecuadamente en el mundo laboral.</p>
        </li>
        <li>
          <p><b>Explorar el Mercado Laboral:</b> Encuentra oportunidades de empleo exclusivas para egresados del IPN, conectando con empresas que reconocen y valoran la formación politécnica.</p>
        </li>
        <li>
          <p><b>Colaborar en Proyectos:</b> Únete a proyectos innovadores y colabora con otros egresados en iniciativas que buscan generar impacto en diversas industrias.</p>
        </li>
      </ul>

      <Image 
      className="imgStudent element"
      src="/images/imageStudent2.jpg" 
      alt="imageStudent.jpg"
      width={900}
      height={900}
      />

      <div className="element">
        <h1>Únete a PerfilJob Hoy</h1>
        <p>Si eres egresado del IPN o una empresa en busca de talento, únete a PerfilJob y comienza a explorar un mundo de oportunidades.</p>
      </div>

    </div>
    </>
}

export default HomePage