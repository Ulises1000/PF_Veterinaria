import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav.jsx";
import Searchbar from "../../components/Searchbar.jsx";
import Card from "../../components/Card.jsx";
import styles from "./Mercado.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/action/index.jsx";

function Mercado() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const [state, setState] = useState({
    loading: false,
    page: 1
  });

  useEffect(() => {
    async function fetchData() {
      setState({ loading: true });
      await dispatch(getAllProducts());
      setState({ loading: false });
    }
    fetchData();
  }, [state.page]);

  return (
      <div>
        <div className="h-14">
          <Nav />
          <Searchbar />
        </div>
        <div className="mt-36">
          <div className={styles.center}>
            {Object.values(products).map((product) => (
                product.map((p, i) => (
                    <Card
                        key={i}
                        image_url={p.image_url}
                        name={p.name}
                        unit_price={p.unit_price}
                    />
                ))
            ))}
            {state.loading && <h1>Loading...</h1>}
          </div>
        </div>
      </div>
  );
}

export default Mercado;
