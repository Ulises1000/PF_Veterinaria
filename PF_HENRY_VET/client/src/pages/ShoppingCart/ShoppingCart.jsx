import { useReducer } from "react";
import { useSelector } from "react-redux";
import { shoppingCartReducer } from "../../redux/reducer/reducer";

export default function ShoppingCart() {
  const productsInCart = useSelector((state) => state.shoppingCart);
  return (
    <>
      <div>
        <h1>Tu Carrito de Compras</h1>
        <h3>Productos</h3>
        <article className="box"></article>
        <h3>Articulos en el Carrito</h3>
        <article className="box"></article>
      </div>
    </>
  );
}
