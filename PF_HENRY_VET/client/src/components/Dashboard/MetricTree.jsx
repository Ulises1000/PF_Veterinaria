
import { Card, Title, BarChart, Subtitle } from "@tremor/react";
import React,{useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/action";

const MetricTree = () => {
  const dispatch = useDispatch()
  const getStock = useSelector((state) => state.filters.products); 
 
 useEffect(() => {
    dispatch(getAllProducts())
 }, [dispatch]);


  return (
    <div>
       <Card>
    <Title>Stock de todos los productos en tienda</Title>
    <Subtitle>
     El gráfico muestra el stock por cada uno de los productos de Only Pets
    </Subtitle>
    <BarChart
      data={getStock}
      dataKey="name"
      categories={["stock"]}
      colors={["blue"]} 
      marginTop="mt-6" 
      yAxisWidth="w-12" 
    />
  </Card>
    </div>
  );
}

export default MetricTree;

 


 

 
 
