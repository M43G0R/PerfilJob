"use client"

import InfoExtraStudent from "@/components/InfoExtraStudent";
import InfoExtraCompany from "@/components/InfoExtraCompany";

function ButtonCompProfile() {
  return (
    <button onClick={(e)=>{
        {(data.typeuser === "company") ? (
            <InfoExtraCompany/>
          ) : (
            <InfoExtraStudent/>
        )}

      }} className="infoExtrabt">Completa tu perfil</button>
  )
}

export default ButtonCompProfile