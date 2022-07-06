import { useAppContext } from "./stateWrapper";
import Product from "./product";
import style from "../styles/shoppingCart.module.css";
export default function ShoppingCart() {
  const cart = useAppContext();
  const handleCloseCart = () => {
    cart.closeCart();
  };
  function getTotal(){
    const total=cart.items.reduce((acc,item)=>acc+item.price*item.quantity,0);
    return total;
  }
  return (
    <div
      className={style.shoppingCart}
      style={{ display: cart.isOpen ? "block" : "none" }}
    >
      <button className={style.close} onClick={handleCloseCart}>Close</button>
      {cart.items.length === 0 ? (
        <div className={style.empty}>
          <h3>Cart Is Empty</h3>
        </div>
      ) : (
        <>
          <h3>Your Items</h3>
          <div>
            {cart.items.map((item) => (
              <Product
                key={item.id}
                item={item}
                showAs="ListItem"
                qty={item.quantity}
              />
            ))}
          </div>
          <h3 className={style.total}>Total: ${getTotal()}</h3>
        </>
      )}
    </div>
  );
}
