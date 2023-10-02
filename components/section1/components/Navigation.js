import Image from "next/image";
import Logo from "../assets/logo.svg"

export default function Navigation(){
    return(
        <header>
            <Image src={Logo} alt="Logo" width={140} />
            <div>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Resources</a></li>
            </ul>
            <form><input></input></form>
            </div>
            <div><button>Join Discord</button></div>
            
        </header>
    )
}