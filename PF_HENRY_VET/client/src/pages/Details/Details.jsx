import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/action";
import Nav from "../../components/Nav.jsx";
import loader from "../../style-assets/paw_icon.png";

const Details = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const { id } = useParams();
  console.log(product);
  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  if (!product) {
    return (
<<<<<<< HEAD
      <div className="flex items-center justify-center bg-patas flex-col h-screen w-screen absolute">
        <img src={loader} className="imgLoader" alt="loader" />
        <p className="loadingTxt">Loading...</p>
      </div>
=======
        <div>
            <div className="h-14">
                <Nav />
            </div>
            <h1 className="font-bold text-center mt-20">DETALLES</h1>
            <div className="text-center flex justify-center items-center ">
                <div className="w-300 bg-white p-6 rounded-lg shadow-xl border-gray-700 flex items-center flex-col">
                    <h3 className="text-purple-500 font-bold">{product.name}</h3>
                    <img src={product.url} alt='img not found' />
                    <p>Stock 1</p>
                    <p>Info: <br />
                        Lorem ipsum dolor sit amet,<br />
                        consectetur adipiscing elit, sed <br />
                        do eiusmod tempor incididunt ut <br />
                        labore et dolore magna aliqua.</p>
                    <p>Precio: ${product.unit_price}</p>
                </div>
            </div>

        </div>
>>>>>>> 201a9482652d0229340a5df111c7fee2d24a1ca9
    );
  }

  return (
    <div>
      <div className="h-14">
        <Nav />
      </div>
      <h1 className="font-bold text-center mt-20">DETALLES</h1>
      <div className="text-center flex justify-center items-center ">
        <div className="w-300 bg-white p-6 rounded-lg shadow-xl border-gray-700 flex items-center flex-col">
          <h3 className="text-purple-500 font-bold">{product.name}</h3>
          <img src={product.url} alt="img not found" />
          <p>Stock 1</p>
          <p>
            Info: <br />
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit, sed <br />
            do eiusmod tempor incididunt ut <br />
            labore et dolore magna aliqua.
          </p>
          <p>Precio: ${product.unit_price}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
