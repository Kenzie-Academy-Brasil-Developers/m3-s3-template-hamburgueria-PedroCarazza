import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const HomePage = () => {
  const [productList, setProductList] = useState([]);

  const localShoppingCart = localStorage.getItem("@ShoppingCart");

  const [cartList, setCartList] = useState(
    localShoppingCart ? JSON.parse(localShoppingCart) : []
  );

  const [isOpen, setIsOpen] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      const response = await api.get("products");

      setProductList(response.data);
    };
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("@ShoppingCart", JSON.stringify(cartList));
  }, [cartList]);

  const addProductsInCart = (product) => {
    const isProductInCart = cartList.find((cartProduct) => {
      return cartProduct.name === product.name;
    });

    if (!isProductInCart) {
      toast.success("Produto adicionado ao carrinho")
      setCartList([...cartList, product]);
    } else{
      toast.error("Produto já foi adicionado ao carrinho")
    }
  };

  const removeProductsInCart = (productId) => {
    const newCartList = cartList.filter((product) => product.id !== productId);
    setCartList(newCartList);
  };

  const removeAllProductsIncart = () => {
    setCartList([])
  }

  const productsResult = productList.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const productListFound = search ? productsResult : productList;

  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        cartList={cartList}
        setIsOpen={setIsOpen}
      />
      <main>
        <ProductList
          addProductsInCart={addProductsInCart}
          productListFound={productListFound}
        />
        {isOpen ? (
          <CartModal
            setIsOpen={setIsOpen}
            cartList={cartList}
            removeProductsInCart={removeProductsInCart}
            removeAllProductsIncart={removeAllProductsIncart}
          />
        ) : null}
      </main>
    </>
  );
};
