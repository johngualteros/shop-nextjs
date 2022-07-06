import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import Product from '../components/product'
import { getLatestItems } from '../services/itemService'
import styles from '../styles/Home.module.css'
import styleProduct from "../styles/product.module.css";
export default function Home({items}) {
  return (
    <Layout title="Home">
      <div className={styles.banner}>
        <div className={styles.bannerBackground}>
          <div className={styles.bannerInfo}>
            <h2>Shop The Github</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi at voluptatibus aspernatur ullam. Incidunt nostrum non neque beatae praesentium quasi magni fugit voluptatem doloribus molestias et mollitia earum consectetur, aperiam quibusdam aliquid atque quam possimus recusandae voluptates, corrupti dolore repudiandae cupiditate. Consequatur porro autem officiis voluptatibus, culpa enim consequuntur eveniet quam a sit dicta nobis sed reiciendis iure, dolore ratione repellat aut obcaecati eligendi nostrum ut! Odio nulla dolores accusantium accusamus, quasi quaerat velit consectetur atque porro. Harum quam fugiat tempora iure numquam inventore sed quod similique accusantium id dolor, odit in ipsam quas nam dolorem maxime distinctio commodi.</p>
          </div>
        </div>
      </div>
      <h3>Latest Products</h3>
      <div className={styleProduct.items}>
        {items &&
          items.map((item) => <Product key={item.id} item={item} showAs="" />)}
      </div>
    </Layout>
  );
}
export async function getStaticProps(){
  const res = await getLatestItems();
  return{
    props:{
      items:res
    }
  }
}