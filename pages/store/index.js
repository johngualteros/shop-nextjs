import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import { getItems } from "../../services/itemService";
import Product from "../../components/product";
import styleItems from "../../styles/product.module.css";
export default function Index({items}){
    return(
        <Layout>
            <h1>Store</h1>
            <div className={styleItems.items}>
            {
                items && items.map(item=>(
                    <Product key={item.id} item={item} showAs={"default"}/>
                ))
            }
            </div>
        </Layout>
    );
}
export async function getStaticProps(){
    const res=await getItems();
    return{
        props:{
            items:res,
        }
    }
}