import React from "react";
import { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import Modal from "../../components/Modal/Modal";
import loader from "../../style-assets/paw_icon.png";
import "./Home.css";

const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center bg-patas flex-col h-screen w-screen absolute">
        <img src={loader} className="imgLoader" />
        <p className="loadingTxt">Loading...</p>
      </div>
    );
  }
  var title = <h1> Dieta y consejos </h1>;
  var img =
    "https://static2.lasprovincias.es/www/multimedia/202202/11/media/cortadas/carne-cruda-perro-kpfD-U120779372723zjH-1248x770@RC-RYAvnS4qTEYaL2HT7k6yvDI-624x385@Las%20Provincias.jpeg";
  var text = (
    <p> La salud de tus mascotas depende enormemente de su alimentacion</p>
  );
  var title2 = <h1> No olvides desparasitar a tus mascotas </h1>;
  var img2 =
    "https://ateuves.es/wp-content/uploads/2022/05/some-vitamins-for-small-puppy_pv2.jpg";
  var text2 = (
    <p> Recuerda realizar chequeos semanales en los primeros meses de vida</p>
  );
  return (
    <>
      <div className="h-screen w-screen bg-patas -mt-20">
        <Nav />

        <div className="AnunciosCanino mt-40 space-y-4">
          <div className="anuncioCanino mt-3">
            <h1>Dieta y consejos</h1>
            <img
              className="w-96 h-52"
              src="https://static2.lasprovincias.es/www/multimedia/202202/11/media/cortadas/carne-cruda-perro-kpfD-U120779372723zjH-1248x770@RC-RYAvnS4qTEYaL2HT7k6yvDI-624x385@Las%20Provincias.jpeg"
            />
            <Modal title={title} img={img} text={text} />
          </div>
          <div className="anuncioCanino">
            <h1>No olvides desparasitar a tus mascotas!</h1>
            <img
              className="w-96 h-52"
              src="https://ateuves.es/wp-content/uploads/2022/05/some-vitamins-for-small-puppy_pv2.jpg"
            />
            <Modal title={title2} img={img2} text={text2} />
          </div>
          <div className="anuncioCanino">
            <h1>Adiestramiento 101</h1>
            <img
              className="w-96 h-52"
              src="https://adiestramientocanino.org/wp-content/uploads/2016/04/adiestramiento-canino.jpg"
            />
            <h2>Leer mas</h2>
          </div>
        </div>
        <div>
          <img
            className="Banner1"
            src="https://nypost.com/wp-content/uploads/sites/2/2022/10/dogfood.jpg"
            alt="no image"
          />
        </div>
        <div className="AnunciosFelino bg-patas flex-col">
          <div className="flex flex-row space-x-4 justify-center items-center">
            <div className="anuncioFelino">
              <h1>Manten a tu gato entretenido y ejercitado!</h1>
              <img
                className="w-96 h-52"
                src="https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg"
              />
              <h2>Leer mas</h2>
            </div>
            <div className="anuncioFelino">
              <h1>Consejos nutricionales para Felinos</h1>
              <img
                className="w-96 h-52"
                src="https://www.purina.co.uk/sites/default/files/2020-12/What%20Human%20Foods%20Can%20Cats%20EatTEASER.jpg"
              />
              <h2>Leer mas</h2>
            </div>
            <div className="anuncioFelino">
              <h1>Adiestramiento para Felinos</h1>
              <img
                className="w-96 h-52"
                src="https://cdn.shopify.com/s/files/1/0070/4990/4194/articles/Cat_School_Photos_1600x.png"
              />
              <h2>Leer mas</h2>
            </div>
          </div>
          <div>
            <div className="ProductosDestacados ml-20">
              <h1>
                {" "}
                <strong> Productos Destacados </strong>
              </h1>
              <div className="ProductoDestacado">
                <h1>Cama Teepee para perros y gatos </h1>
                <img
                  className="w-96 h-52"
                  src="https://image.chewy.com/is/image/catalog/145964_MAIN._AC_SL600_V1566408463_.jpg"
                  alt=""
                />
              </div>
              <div className="ProductoDestacado">
                <h1> Rascador para gatos "Scratch n Hide"</h1>
                <img
                  className="w-96 h-52"
                  src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR7n-Sme-9so_TsBe2tnifd8M8XIvrrLNB9CX0JyXAK6kbqvK8yvQCI6p35OG_ggYsanX9xdvKYk-7u5LVe-b32Aj_hM2rCdJc46mK15ksrh_ZUCJm5P7cG0A&usqp=CAE"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
