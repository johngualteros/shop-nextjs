import style from "../styles/cardButton.module.css";
import { useAppContext } from "./stateWrapper";
export default function CardButton({item}){
    const cart=useAppContext();
    const handleAddItem=()=>{
        cart.addItemToCart(item);
        cart.openCart();
    }
    return <button className={style.button} onClick={handleAddItem}>Add To Cart</button>;
}