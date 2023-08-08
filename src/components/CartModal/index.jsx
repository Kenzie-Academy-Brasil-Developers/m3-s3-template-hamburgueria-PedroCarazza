import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss";

export const CartModal = ({ cartList, removeProductsInCart, setIsOpen, removeAllProductsIncart }) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  return (
    <div className={styles.modal__background}>
      <div role="dialog" className={styles.modal__container} >
        <div className={styles.modal__header}>
          <h2>Carrinho de compras</h2>
          <button
            onClick={() => setIsOpen(false)}
            className={styles.modal__close}
            aria-label="close"
            title="Fechar"
          >
            <MdClose size={21} />
          </button>
        </div>
        <div className={styles.modal__content}>
          <ul className={styles.modal__list}>
            {cartList.map((product) => (
              <CartItemCard
                key={product.id}
                product={product}
                removeProductsInCart={removeProductsInCart}
              />
            ))}
          </ul>
        </div>
        <div className={styles.modal__summary}>
          <div>
            <hr className="headline" />
          </div>

          <div className={styles.modal__total}>
            <span className="headline two">Total</span>
            <span className="body">
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <button onClick={() => removeAllProductsIncart()} className="btn default remove">Remover todos</button>
        </div>
      </div>
    </div>
  );
};
