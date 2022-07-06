import Layout from "../../components/layout";
import Product from "../../components/product";
import { getItemData, getPathsFromIds } from "../../lib/utils";

export default function ProductPage({productInfo}){
    return (
      <Layout title={productInfo.data.name}>
        <Product item={productInfo.data} showAs="Page" />
      </Layout>
    );
}
export async function getStaticPaths(){
    const paths=await getPathsFromIds();
    return{
        paths:paths,
        fallback:false,
    }
}
export async function getStaticProps({params}){
    const id=params.id;
    const product=await getItemData(id);
    return{
        props:{
            productInfo:product,
        }
    }
}