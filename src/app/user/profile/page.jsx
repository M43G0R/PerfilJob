import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";
import InfoExtraStudent from "@/components/InfoExtraStudent";
import InfoExtraCompany from "@/components/InfoExtraCompany";
import "./page.scss"
import ButtonCompProfile from "@/components/ButtonCompProfile";

InfoExtraCompany

async function Profile({ params }) {

  const session = await getServerSession(authOptions);

  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/users/${session.user.name}`)
  const data = await res.json()
  console.log(data.name)

  const desplegarProfile = ()=>{
    document.getElementById('infoExtrabt').addEventListener('click', function() {
      console.log("Funcionaaa")
  });
  }

  desplegarProfile()

  return (
    <div className="profile">
      <div className="images">
        <Image className="backgroundImg" src="/images/background.jpg" alt="Logo" width={2048} height={1152} />
        <Image className="profileImg" src="/images/profile.png" alt="Logo" width={200} height={200} />

      </div>
      <div className="firstinfo">
        <h2>{data.name} {data.lastname} </h2>
        <h4>Username: <b>{data.username}</b></h4>
      </div>
      <div className="info">
        <div className="contact">
          <h4>Contacto</h4>
          <p>Email: {data.email}</p>
        </div>

        <div className="status">
          <h4>Status</h4>
          {(data.typeuser === "company") ? (
            <p>Empresa</p>
          ) : (
            <p>Estudiante</p>
          )}
        </div>

        <button id="infoExtrabt" className="infoExtrabt">Completa tu perfil</button>
        
        {(data.typeuser === "company") ? (
            <InfoExtraCompany/>
          ) : (
            <InfoExtraStudent/>
        )}
        
      </div>


    </div>
  )

}


export default Profile