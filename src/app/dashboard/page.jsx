import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function Dashboard() {

  const session = await getServerSession(authOptions);
  //console.log("This is session", session.user.name);

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>{session.user.name}</h3>
    </div>
  )

}


export default Dashboard