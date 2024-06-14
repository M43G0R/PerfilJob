import Link from "next/link"
import Image from "next/image"
import "./navbar.scss"

function Navbar() {
    return (
        <nav className="navbar">
            <Link className="logo" href="/">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={200}
                    height={80}
                />
            </Link>
            <ul>
                <li>
                    <Link href="/auth/login">Login</Link>
                </li>
                <li>
                    <Link href="/auth/signup">Sign Up</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar