import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, postShoppingDetail } from "../../redux/action";
import Nav from "../../components/Nav.jsx";
import loader from "../../style-assets/paw_icon.png";

const Details = ({ hayUser }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState("");
  const product = useSelector((state) => state.products.product);
  const user = useSelector((state) => state.user.user);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  function handleClick() {
    dispatch(
      postShoppingDetail({
        unit_price: product.unit_price,
        quantity: unit_price,
        date_added: new Date(),
        idCard: user.shoppingCartCodCart,
        idProduct: product.codProduct,
      })
    );
  }

  console.log(localStorage.userPetShop, "here user === undefined");
  if (!product) {
    return (
      <div className="flex items-center justify-center bg-patas flex-col h-screen w-screen absolute">
        <img src={loader} className="imgLoader" alt="loader" />
        <p className="loadingTxt">Loading...</p>
      </div>
    );
  }
  console.log(product, "irmao");

  return (
    <div className="bg-patas">
      <div className="h-14">
        <Nav user={hayUser} />
      </div>
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
              <input
                type="number"
                min={0}
                max={product.stock}
                onKeyDown="return false"
                value={unit_price}
                onChange={(e) => setQuantity(e.target.value)}
              ></input>
              <p>Precio: ${product.unit_price}</p>
            </div>
            <button
              className="bg-violet-200 rounded-lg p-4"
              onClick={handleClick()}
            >
              Añadir a Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
