import Link from "next/link"
import Image from "next/image"

function Navbar() {
  return (
    <nav>
        <Link className="logo" href="/">
            <Image
                src="/images/LogoPerfilJob.png"
                alt="Logo"
                width={100}
                height={100}
            />
        </Link>
        <ul>    
            <li>
                <Link href="/login">Login</Link>
            </li>
            <li>
                <Link href="/signup">Sign Up</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar