import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss";

export const ProductList = ({addProductsInCart, productListFound}) => {
  return (
    <section>
      <ul className={styles.list}>
        {productListFound.map((product) => (
          <ProductCard key={product.id} product={product} addProductsInCart={addProductsInCart}/>
        ))}
      </ul>
    </section>
  );
};
