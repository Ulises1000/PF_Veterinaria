import React, { useState, useEffect } from 'react'
import axios from "axios";
import Nav from '../../components/Nav.jsx'
import Searchbar from '../../components/Searchbar.jsx'
import Characteristic from '../../components/Characteristic.jsx'
import Card from '../../components/Card.jsx'
import styles from './Home.module.css'

function Home() {
  const [products, setProducts] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const result = await axios(
          `https://productos-mascotas-default-rtdb.firebaseio.com/productos.json?page=${page}`,
      );

      setProducts(result.data);
      setLoading(false);
    }

    fetchData();
  }, [page])

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return;
    }
    setPage(page + 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [products]);
  return (
    <div>
      <Nav />
        <Searchbar />
        <Characteristic />
      <div className={styles.center}>
        {Object.values(products).map(product => (
            <Card
                key={product.id}
                image={product.image}
                nombre={product.nombre}
                precio={product.precio}
            />
        ))}
        {loading && <h1>Loading...</h1>}
      </div>
    </div>
  )
}

export default Home
