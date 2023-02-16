import FadeIn from "react-fade-in";
import { useReducer, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { shoppingCartDtailReducer } from "../../redux/reducer/shoppingCartDtailReducer";
import { shoppingInitialState } from "../../redux/reducer/shoppingCartDtailReducer";
import { getShoppingDetail } from "../../redux/action/index.jsx";
import axios from "axios";
import Nav from "../../components/Nav";
import CardItem from "../../components/CartItem";
import "./shoppingcart.module.css";

export default function ShoppingCart() {
  const [paymentCoso, setPaymentCoso] = useState(false);
  const mercadopago = new MercadoPago(
    "TEST-c96ffcd7-4853-4106-8f80-8bc4520dea40",
    {
      locale: "es-AR",
    }
  );
  const user = useSelector((state) => state.user);

  let userDetail;

  if (Object.keys(user).length === 0) {
    userDetail = JSON.parse(localStorage.userPetShop);
  }

  console.log(userDetail, " USER");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingDetail(userDetail.shoppingCartCodCart));
  }, []);

  const detalles = useSelector(
    (state) => state.shoppingCartDtail.shoppingCartDtail
  );
  // const [state, dispatch] = useReducer(
  //   shoppingCartDtailReducer,
  //   shoppingInitialState
  // );
  console.log("Detalles en el carrito", detalles);
  const [items, setItems] = useState([]);

  function handleDeleteItem(element) {
    setItems({
      ...items,
      items: items.filter((codProduct) => codProduct !== element),
    });
  }

  function createCheckoutButton(preferenceId) {
    // Initialize the checkout
    mercadopago.checkout({
      preference: {
        id: preferenceId,
      },
      render: {
        container: "#button-checkout", // Class name where the payment button will be displayed
        label: "Pagar", //   Change the payment button text
      },
    });
  }

  function handleClick() {
    const newArr = detalles.map((e) => {
      setPaymentCoso(true);
      return {
        description: e.cod_CartDetail,
        price: e.unit_Price_CD,
        quantity: e.quantity_CD,
        img: e.url,
      };
    });
    console.log("NEW ARRAY ===>", newArr);
    fetch("http://localhost:3001/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArr),
    })
      .then((response) => {
        const a = response.json();

        return a;
      })
      .then(function (preference) {
        createCheckoutButton(preference.id);
        console.log(preference, "preference");
      })

      .catch(function (err) {
        console.log(err);
        alert("Unexpected error");
      });
  }

  return (
    <>
      <Nav />
      {!paymentCoso && (
        <div className=" h-screen flex justify-center">
          <script src="https://sdk.mercadopago.com/js/v2"></script>
          <div className=" mt-36 flex flex-col">
            <h1 className="font-bold  font-Fredoka text-lg self-center">
              Tu Carrito de Compras
            </h1>

            <article className="box"></article>
            <h3 className="font-Fredoka">Articulos en el Carrito</h3>
            <article className="box">
              {detalles.length ? (
                detalles.map((e) => (
                  <>
                    <CardItem
                      productName={e.cod_CartDetail}
                      unit_price={e.unit_Price_CD}
                      quantity={e.quantity_CD}
                      productImg={e.url}
                      key={e.cod_CartDetail}
                    />
                    <button className="text-red-600 w-28 hover:text-red-400 rounded self-center font-sans ">
                      Eliminar Item
                    </button>
                  </>
                ))
              ) : (
                <h4> No hay productos en el carrito </h4>
              )}
            </article>

            <button
              onClick={handleClick}
              className="bg-violet-400 w-24 hover:bg-violet-300 rounded self-center font-sans p-2 "
            >
              Comprar
            </button>
          </div>
        </div>
      )}

      {paymentCoso && (
        <section className="payment-form dark">
          <FadeIn transitionDuration="900">
            <div className="container_payment">
              <div className="block-heading">
                <h2>Checkout Payment</h2>
              </div>
              <div className="form-payment">
                <div className="products">
                  <h2 className="title">Summary</h2>
                  <div className="item">
                    <span className="price" id="summary-price"></span>
                    <p className="item-name">
                      Alimento Canino x <span id="summary-quantity"></span>
                    </p>
                  </div>
                  <div className="total">
                    Total:
                    {Number.parseFloat(
                      detalles[0].unit_Price_CD * detalles[0].quantity_CD
                    ).toFixed(2)}
                    <span className="price" id="summary-total"></span>
                  </div>
                </div>
                <div className="payment-details">
                  <div className="form-group col-sm-12">
                    <br />
                    <div id="button-checkout"></div>
                    <br />
                    <a id="go-back" href="/shoppingCart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 10 10"
                        className="chevron-left"
                      >
                        <path
                          fill="#009EE3"
                          fillRule="nonzero"
                          id="chevron_left"
                          d="M7.05 1.4L6.2.552 1.756 4.997l4.449 4.448.849-.848-3.6-3.6z"
                        ></path>
                      </svg>
                      Go back to Shopping Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      )}
    </>
  );
}
