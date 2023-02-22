import React from "react";
import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import loader from "../../style-assets/paw_icon.png";
import "./Home.module.css";
import bannerDog from "../../media/bannerDog.png";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/Modal/Modal";
import { getAllProducts } from "../../redux/action";
import { Link, redirect } from "react-router-dom";

const Home = ({ hayUser }) => {
  const dispatch = useDispatch()
  let user = useSelector((state) => state.user.user);
  let product = useSelector((state) => state.filters.products);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    dispatch(getAllProducts());
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);



  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }







  if (loading) {
    return (
      <div className="flex items-center justify-center bg-patas flex-col h-screen w-screen absolute">
        <img src={loader} className="imgLoader" />
        <p className="loadingTxt">Loading...</p>
      </div>
    );
  }

  if(product.length){
    let productoUno= product[getRandomInt(`${product.length}`)]
    let productoDos= product[getRandomInt(`${product.length}`)]
    console.log(productoUno, productoDos)
    return (
      <div className="h-auto w-full bg-patas -mt-20 overflow-x-hidden">
        <Nav user={hayUser} />
  
        <div className="flex flex-row  w-full space-y-36 md:space-y-5 md:mr-28 mt-10 md:mt-40  space-x-3 items-center justify-around">
          <div className="sm:mt-40 md:mt-10 hidden md:flex flex-col md:visible">
            <h1 className="text-gray-500 font-Fredoka font-semibold mt- mb-2">
              Dieta y consejos
            </h1>
            <img
              className="rounded-lg shadow-2xl md:w-96 md:h-52"
              src="https://static2.lasprovincias.es/www/multimedia/202202/11/media/cortadas/carne-cruda-perro-kpfD-U120779372723zjH-1248x770@RC-RYAvnS4qTEYaL2HT7k6yvDI-624x385@Las%20Provincias.jpeg"
            />
            <Modal  title={"Dietas y Consejos"}/>
          </div>
          <div className="hidden md:flex flex-col md:visible">
            <h1 className="text-gray-500 font-Fredoka font-semibold mt- mb-2">
              No olvides desparasitar a tus mascotas!
            </h1>
            <img
              className="rounded-lg shadow-2xl w-10 md:w-96 md:h-52"
              src="https://ateuves.es/wp-content/uploads/2022/05/some-vitamins-for-small-puppy_pv2.jpg"
            />
            <Modal  title={"No olvides desparasitar a tus mascotas!"}/>
          </div>
          <div className="flex flex-col">
            <h1 className="text-gray-500 font-Fredoka font-semibold mt- mb-2">
              Adiestramiento 101
            </h1>
            <img
              className="rounded-lg shadow-2xl sm:w-30 md:w-96 md:h-52"
              src="https://adiestramientocanino.org/wp-content/uploads/2016/04/adiestramiento-canino.jpg"
            />
            <Modal title={"Adiestramiento 101"}/>
          </div>
        </div>
        <div className="h-fit md:h-48 overflow-hidden w-full">
          <img className="relative md:-top-28" src={bannerDog} alt="no image" />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row space-x-4 justify-center items-center mt-11">
            <div className="md:flex flex-col hidden md:visible">
              <h1 className=" text-gray-500 font-Fredoka font-semibold mt- mb-2">
                Manten a tu gato entretenido y ejercitado!
              </h1>
              <img
                className="rounded-lg shadow-2xl w-96 h-52"
                src="https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg"
              />
               <Modal title={"Manten a tu gato entretenido y ejercitado!"}/>
            </div>
            <div className="md:flex flex-col hidden md:visible">
              <h1 className="text-gray-500 font-Fredoka font-semibold mt- mb-2">
                Consejos nutricionales para Felinos
              </h1>
              <img
                className="rounded-lg shadow-2xl md:w-96 md:h-52"
                src="https://www.purina.co.uk/sites/default/files/2020-12/What%20Human%20Foods%20Can%20Cats%20EatTEASER.jpg"
              />
              <Modal title={"Consejos nutricionales para Felinos"}/>
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray-500 font-Fredoka mb-5 md:mb-1 font-semibold md">
                Adiestramiento para Felinos
              </h1>
              <img
                className="rounded-lg shadow-2xl md:w-96 md:h-52"
                src="https://cdn.shopify.com/s/files/1/0070/4990/4194/articles/Cat_School_Photos_1600x.png"
              />
                <Modal title={"Adiestramiento para Felinos"}/>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center space-y-4 mb-7 md:ml-0">
              <div className="bg-gray-800 h-8 border-y-2 border flex justify-center border-black">
                <h1 className="font-Fredoka font-semibold text-white">
                  {" "}
                  <strong> Productos Destacados </strong>
                </h1>
              </div>
              <div className="flex flex-row self-center">
            <a href={`details/${productoUno.codProduct}`}>
                <div className="mr-9">
                  <div className="flex flex-col">
                    <h1 className="text-gray-500 font-Fredoka mb-5 md:mb-1 font-semibold md">
                    {productoUno.name}{" "}
                    </h1>
                    <img
                      className="w-56 h-56 md:w-96 md:h-52 rounded-lg"
                      src={productoUno.url}
                      alt=""
                    />
                  </div>
                </div>
                </a>
                <div>
                <a href={`details/${productoDos.codProduct}`}>
                  <div className="flex flex-col">
                    <h1 className="text-gray-500 font-Fredoka mb-5 md:mb-1 font-semibold md">
                      {" "}
                      {productoDos.name}
                    </h1>
                    <img
                      className="w-56 h-56 md:w-96 md:h-52 rounded-lg"
                      src={productoDos.url}
                      alt=""
                      />
                  </div>
                      </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Home;
