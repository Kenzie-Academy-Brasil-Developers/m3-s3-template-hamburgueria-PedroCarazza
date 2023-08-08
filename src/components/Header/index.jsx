import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch } from "react-icons/md";
import styles from "./style.module.scss";
import cart from "../../assets/cart.svg";

export const Header = ({search, setSearch, cartList, setIsOpen}) => {

  const submit = (event) => {
    event.preventDefault();
    setSearch(value);
    setValue("")
  };

  const [value, setValue] = useState("")

  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <img src={Logo} alt="Logo Kenzie Burguer" />
        <button onClick={() => setIsOpen(true)} className={styles.button__cart}>
          <img src={cart} alt="carrino de compras" />
          <span className={styles.span__cart}>{cartList.length}</span>
        </button>
      </div>
      <div className={styles.container__form}>
        <form onSubmit={submit}>
          <input
            required
            placeholder="Digitar pesquisa"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">
            <MdSearch size={21} />
          </button>
        </form>
      </div>
    </header>
  );
};
