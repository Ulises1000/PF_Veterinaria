import { useReducer, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { shoppingCartDtailReducer } from "../../redux/reducer/shoppingCartDtailReducer";
import { shoppingInitialState } from "../../redux/reducer/shoppingCartDtailReducer";
import { getAllProducts, getShoppingDetail, deleteShoppingDetail } from "../../redux/action/index.jsx";
import loader from "../../style-assets/bg-patas.png"
import axios from "axios";
import Nav from "../../components/Nav";
import CardItem from "../../components/CartItem";
import "./shoppingcart.module.css";
import { Link } from "react-router-dom";


export default function ShoppingCart() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    loading: false});
    const detalles = useSelector(
      (state) => state.shoppingCartDtail.shoppingCartDtail
    );

    
  useEffect(() => {
    function fetchData() {
      setState({ loading: true });
      dispatch(getAllProducts());

      setState({ loading: false });
    }
    fetchData()
    dispatch(getShoppingDetail(!user? user.user.shoppingCartCodCart : userDetail.shoppingCartCodCart));
    return () => {getAllProducts()} 
  }, [state.loading]);

  const [paymentCoso, setPaymentCoso] = useState(false);
  const product = useSelector((state) => state.products);
  console.log("este el product state", product.products)
  const mercadopago = new MercadoPago(
    "TEST-c96ffcd7-4853-4106-8f80-8bc4520dea40",
    {
      locale: "es-AR",
    }
  );
  const user = useSelector((state) => state.user);

  let userDetail;
 if(localStorage.userPetShop && localStorage.userPetShop ){console.log("OK")}
  // if (Object.keys(user).length === 0) {
    userDetail = JSON.parse(localStorage?.userPetShop);
  // }

  console.log(user, " USER");

  const [cartProducts, setCartProducts] = useState({
    name:"",
    quantity: "",
    unitPrice: 0,
    productImg: "",

  })


  
  
  
let ahoraSiFiltrados = []
  if(product.length !==0){
  for (let i = 0; i < detalles.length; i++) {
    let productCarrito = product.products?.filter( (p) => p.codProduct === detalles[i].productCodProduct)
   
    let arr1 = detalles.filter((e)=> e.productCodProduct === productCarrito[0].codProduct)
    
    ahoraSiFiltrados.push(productCarrito[0])
    ahoraSiFiltrados[i].quantity_CD = arr1[0].quantity_CD
    ahoraSiFiltrados[i].cod_CartDetail= arr1[0].cod_CartDetail
    
  }
}

 useEffect(()=>{
  console.log("Ahora si ahora no")
  },[ahoraSiFiltrados])

  
  
  

  function handleDeleteItem(e) {
   
    dispatch(deleteShoppingDetail( e.cod_CartDetail ,e.codProduct))
     setState({
       loading: true
     })
     
     location.reload()
     swal ( "Eliminado del Carrito" ,  "" ,  "error" )
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
    const newArr = ahoraSiFiltrados.map((e) => {
      setPaymentCoso(true);
      return {
        title: e.name,
        unit_price: e.unit_price,
        quantity: e.quantity_CD,
        picture_url: e.url,
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
              {ahoraSiFiltrados.length !== 0 ? (
                ahoraSiFiltrados.map((e) => (
                  <>
                    <CardItem
                      productName={e.name}
                      unit_price={e.unit_price}
                      quantity={e.quantity_CD}
                      productImg={e.url}
                      key={e.cod_CartDetail}
                    />
                    <button onClick={()=> handleDeleteItem(e)} className="bg-red-600 text-white-600 w-28 hover:bg-red-400 rounded self-center font-sans mb-24 ">
                      Eliminar Item
                    </button>
                  </>
                ))
              ) : (
                <h4> No hay productos en el carrito </h4>
              )}
            </article>

           { ahoraSiFiltrados.length !== 0 ? ( <button
              onClick={handleClick}
              className="bg-violet-400 w-24 hover:bg-violet-300 rounded self-center font-sans p-2 "
            >
              Comprar
            </button>
           ) : <Link to={"/market"}><h4 className="text-blue-600">  Volver al mercado</h4></Link>
    }
          </div>
        </div>
      )}

      {paymentCoso && (
        <section className="mt-52 flex justify-center" >
            <div className=" flex-col ">
              <div className="block-heading">
                <h2>Finaliza tu Compra</h2>
              </div>
              <div className="form-payment">
                <div className="products">
                  <h2 className="title">Resumen</h2>
                  <div className="item">
                    <span className="price" id="summary-price"></span>
                    <div className="item-name">
                      {ahoraSiFiltrados.map((e)=> {
                       return( <p>Nombre : {e.name} x {e.quantity_CD}</p>)
                      })} 
                        
                    </div>
                  </div>
                  <div className="total">
                    Total:{" "} 
                    {Number.parseFloat(
                      detalles.reduce((acc, currentValue)=> {
                        return acc + (currentValue.quantity_CD * currentValue.unit_Price_CD)
                        
                      }, 0)
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
        </section>
      )}
      
    </>
  );
}
