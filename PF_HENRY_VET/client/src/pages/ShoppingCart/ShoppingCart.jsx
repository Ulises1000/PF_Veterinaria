import { useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { shoppingCartDtailReducer } from "../../redux/reducer/shoppingCartDtailReducer";
import { shoppingInitialState } from "../../redux/reducer/shoppingCartDtailReducer";
import Nav from "../../components/Nav";
import CardItem from "../../components/CartItem";

export default function ShoppingCart() {
  const [state, dispatch] = useReducer(
    shoppingCartDtailReducer,
    shoppingInitialState
  );

  const [items, setItems] = useState([]);
  return (
    <>
      <Nav />
      <div className="mt-48 h-screen">
        <h1>Tu Carrito de Compras</h1>
        <h3>Productos</h3>
        <article className="box"></article>
        <h3>Articulos en el Carrito</h3>
        <article className="box">
          {items.map((e) => (
            <CardItem />
          ))}{" "}
        </article>
      </div>
    </>
  );
}
