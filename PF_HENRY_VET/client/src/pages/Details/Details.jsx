import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, postShoppingDetail } from "../../redux/action";
import Nav from "../../components/Nav.jsx";
import loader from "../../style-assets/paw_icon.png";
import Footer from "../../components/Footer";

const Details = ({ hayUser }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const product = useSelector((state) => state.products.product);
  const user = useSelector((state) => state.user.user);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  let userDetail = hayUser;

  if (hayUser === undefined) {
    userDetail = JSON.parse(localStorage.userPetShop);
  }
  console.log("USERDETAIL ==>", userDetail.shoppingCartCodCart);
  console.log("Product ===", product);
  console.log("USUARIO ===", user);

  console.log(localStorage.userPetShop, "here user === undefined");

  if (product === undefined) {
    return (
      <div className="flex items-center justify-center bg-patas flex-col h-screen w-screen absolute">
        <img src={loader} className="imgLoader" alt="loader" />
        <p className="loadingTxt">Loading...</p>
      </div>
    );
  }

  function handleClick() {
    console.log("Entro");
    console.log(product.unit_price);
    console.log(userDetail.shoppingCartCodCart);
    console.log(product.codProduct);
    console.log(quantity);
    dispatch(
      postShoppingDetail({
        unit_price: product.unit_price,
        quantity: quantity,
        date_added: new Date(),
        idCart: userDetail?.shoppingCartCodCart,
        idProduct: product.codProduct,
        productName: product.name,
      })
    );
    //debe afectar el product.stock en base a la cantidad del pedido solicitado
    //Deberia enviar el monto total en base a la cantidad del pedido2
  }

  return (
    <div className="h-auto w-full bg-patas -mt-20 overflow-x-hidden">
      <Nav user={hayUser} />
      <div className="flex flex-col  w-full mb-56 space-y-36 md:space-y-5 md:mr-28 mt-10 md:mt-40  space-x-3 items-center justify-around">
        <h1 className="font-bold text-center mt-20">DETALLES</h1>
        <div className="text-center flex justify-center items-center bg-patas">
          <div className="w-300 bg-white p-6 rounded-lg shadow-xl border-gray-700 flex items-center">
            <img src={product.url} alt="img not found" />
            <div className="flex flex-col ml-20">
              <h3 className="text-purple-500 font-bold">{product.name}</h3>
              <div>
                <p className="text-lg font-Fredoka font-bold">
                  Acerca de este producto:
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
                  <br />
                  do eiusmod tempor incididunt ut <br />
                  labore et dolore magna aliqua.
                </p>
                <p>Para: {product.breedType}</p>
              </div>
              <div className="flex flex-row justify-around items-center space-y-20">
                <p className="mt-20">Stock: {product.stock}</p>
                <label>Cantidad:</label>
                <input
                  className="bg-indigo-400 rounded border-gray-900"
                  type="number"
                  min={0}
                  max={product.stock}
                  onKeyDown="return false"
                  onChange={(e) => setQuantity(parseFloat(e.target.value))}
                ></input>

                <p>Precio: ${product.unit_price}</p>
              </div>
              <button
                className="bg-violet-200 rounded-lg p-4"
                onClick={() => handleClick()}
              >
                Añadir a Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
