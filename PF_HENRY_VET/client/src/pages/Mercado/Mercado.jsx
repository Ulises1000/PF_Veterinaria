import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav.jsx";
import Searchbar from "../../components/Searchbar.jsx";
import Card from "../../components/Card.jsx";
import styles from "./Mercado.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/action/index.jsx";
import loader from "../../style-assets/paw_icon.png";


function Mercado() {
  const dispatch = useDispatch();
  const paginationArray = useSelector(state => state.filters.paginationArray)
  const realState = useSelector((state => state))
  const [state, setState] = useState({
    loading: false,
    page: 1
  });
  
  
  useEffect(() => {
    async function fetchData() {
      console.log(realState)
      console.log(paginationArray)
      setState({ loading: true });
      dispatch(getAllProducts());
      setState({ loading: false });
    }
    fetchData();
  }, [state.page]);


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
        <img src={loader} className="imgLoader" alt='loader image'/>
        <p className="loadingTxt">Loading...</p>
      </div>
    );
  }
  
  // if (loading === false && paginationArray[0]){
    return (
        <div>
          <div className="h-14">
            <Nav />
            <Searchbar />
          </div>
          <div className="mt-36">
            <div className={styles.center}>
              {Object.values(paginationArray).map((product) => 
              ( product.map((p, i) => (
                      <Card
                          key={i}
                          id={p.codProduct}
                          url={p.url}
                          name={p.name}
                          unit_price={p.unit_price}
                      />
                  ))
              ))}
            </div>
          </div>
        </div>
    );
  // }
}

export default Mercado;
