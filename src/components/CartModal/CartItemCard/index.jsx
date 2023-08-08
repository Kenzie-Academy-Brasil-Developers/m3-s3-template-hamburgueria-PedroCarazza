import crashIcon from "../../../assets/crash-icon.svg";
import styles from "./style.module.scss";

export const CartItemCard = ({ product, removeProductsInCart }) => {
  return (
    <li className={styles.itemCart}>
      <div className={styles.info__itemCart}>
        <img src={product.img} alt={product.name} />
        <div>
          <h3 className="title three">{product.name}</h3>
          <p>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </div>
      <button
        onClick={() => removeProductsInCart(product.id)}
        aria-label="delete"
        title="Remover item"
      >
        <img src={crashIcon} alt="excluir" />
      </button>
    </li>
  );
};
