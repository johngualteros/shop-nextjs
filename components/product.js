import Image from "next/image";
import Link from "next/link";
import { convertToPath } from "../lib/utils";
import style from "../styles/product.module.css";
import CardButton from "./cardButton";
export default function Product({ item, showAs, qty }) {
  if (showAs === "Page") {
    return (
      <div className={style.page}>
        <div className={style.image}>
          <Image src={item.image} alt={item.name} width={700} height={700} />
        </div>

        <div className={style.info}>
          <div>
            <h2>{item.name}</h2>
          </div>
          <div className={style.price}>{item.price}</div>
          <div>
            <p>{item.description}</p>
          </div>
          <div>
            <CardButton item={item} />
          </div>
        </div>
      </div>
    );
  }
  if (showAs === "ListItem") {
    return (
      <div className={style.listItem}>
        <div>
          <Image
            src={item.image}
            alt="Picture of the author"
            width={100}
            height={100}
          />
        </div>
        <div className={style.containerItems}>
            <h5>{item.name}</h5>

            <h5>{item.price}</h5>

          {qty === 0 ? (
            ""
          ) : (

              <h5>{qty} units</h5>
  
          )}
          {qty === 0 ? (
            ""
          ) : (

              <h5 className={style.subtotal}>${qty * item.price} units</h5>
  
          )}
        </div>
      </div>
    );
  }
  // const src={src:item.image};
  return (
    <div className={style.item}>
      <div>
        <Link href={`/store/${convertToPath(item.name)}`}>
          <a>
            <Image
              src={item.image}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </a>
        </Link>
      </div>
      <div>
        <h3>
          <Link href={`/store/${convertToPath(item.name)}`}>
            <a>{item.name}</a>
          </Link>
        </h3>
      </div>

      <div>
        <p>${item.price}</p>
      </div>
      <div>
        <CardButton item={item} />
      </div>
    </div>
  );
}
