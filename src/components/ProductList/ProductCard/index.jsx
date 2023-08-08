import styles from "./style.module.scss";

export const ProductCard = ({ product, addProductsInCart }) => {
  return (
    <div>
      <li className={styles.card}>
        <img src={product.img} alt={product.name} />
        <div>
          <h3 className="title three">{product.name}</h3>
          <span className="caption">{product.category}</span>
          <span className={styles.span__value}>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <button onClick={() => addProductsInCart(product)} className="btn default">Adicionar</button>
        </div>
      </li>
    </div>
  );
};
