import Link from "next/link";
import style from "../styles/navbar.module.css";
import { useAppContext } from "./stateWrapper";
export default function Navbar(){
    const cart=useAppContext();
    const handleOpenCart=()=>{
        cart.openCart();
    }
    return(
        <nav className={style.menu}>
            <div>
                <Link href="/">
                    <a className={style.link}>Home</a>
                </Link>
                <Link href="/store">
                    <a className={style.link}>Store</a>
                </Link>
                <Link href="/faq">
                    <a className={style.link}>Faq</a>
                </Link>
            </div>
            <div>
                <a onClick={handleOpenCart} className={style.link}>Cart ({cart.items.length})</a>
            </div>
        </nav>
    )
}