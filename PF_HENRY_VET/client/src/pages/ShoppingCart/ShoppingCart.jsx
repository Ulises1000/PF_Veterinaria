import { useReducer } from "react";
import { useSelector } from "react-redux";
import { shoppingCartDtailReducer } from "../../redux/reducer/shoppingCartDtailReducer";
import { shoppingInitialState } from "../../redux/reducer/shoppingCartDtailReducer";

export default function ShoppingCart() {
  const [state, dispatch] = useReducer(
    shoppingCartDtailReducer,
    shoppingInitialState
  );
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
