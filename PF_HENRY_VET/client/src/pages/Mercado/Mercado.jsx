import FadeIn from 'react-fade-in';
import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav.jsx";
import Searchbar from "../../components/Searchbar.jsx";
import Card from "../../components/Card.jsx";
import styles from "./Mercado.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts, getAllProducts } from "../../redux/action/index.jsx";
import loader from "../../style-assets/paw_icon.png";
import Footer from "../../components/Footer.jsx";
import NotFoundProduct from "../NotFoundProduct/NotFoundProduct.jsx";

function Mercado({ hayUser }) {
  const dispatch = useDispatch();
  const paginationArray = useSelector((state) => state.filters.paginationArray);
  const pagArrayArray = paginationArray[0];
  const realState = useSelector((state) => state);
  const [state, setState] = useState({
    loading: false,
    page: 1,
  });

  useEffect(() => {
    async function fetchData() {
      setState({ loading: true });
      dispatch(getAllProducts());

      setState({ loading: false });
    }
    fetchData();
  }, [state.page]);

  useEffect(() =>{
    dispatch(filterProducts({
      breed: "breedType",
      size: "petSize",
    }))
  }, [])

  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  if (loading) {
    console.log(loading, "DENTRO DEL LOADING");
    return (
      <div className="flex items-center justify-center bg-patas flex-col h-screen w-screen absolute">
        <img src={loader} className="imgLoader" alt="loader image" />
        <p className="loadingTxt">Loading...</p>
      </div>
    );
  }

  if (loading === false && paginationArray[0]) {
    if (pagArrayArray[0] !== null) {
      return (
      <div>

        <div>
          <div className="h-14">
            <Nav user={hayUser} />
            <Searchbar />
          </div>
        </div>
          <FadeIn transitionDuration="900">
        <div>
          <div className="mt-36">
            <div className={styles.center}>
              {Object.values(paginationArray).map((product) =>
                product.map((p, i) => (
                  <Card
                  key={i}
                  id={p.codProduct}
                  url={p.url}
                  name={p.name}
                  unit_price={p.unit_price}
                  breedType={p.breedType}
                  petSize={p.petSize}
                  />
                  ))
                  )}
            </div>
          </div>
          <Footer />
        </div>
</FadeIn>
</div>
      )
    } else if (pagArrayArray[0] === null) {
      return (
        <div>
          <div className="h-14">
            <Nav />
            <Searchbar />
          </div>
          <div className="mt-36">
            <div className={styles.center}>
              <NotFoundProduct />
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }
}

export default Mercado;
