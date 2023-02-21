
import { Card, Title, BarChart, Subtitle } from "@tremor/react";
import React,{useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/action";

const MetricTree = () => {
  const dispatch = useDispatch()
  const getStock = useSelector((state) => state.filters.products);
 console.log("EL STOCK ES ESTE",getStock)
 
 useEffect(() => {
    dispatch(getAllProducts())
 }, [dispatch]);


  return (
    <div>
       <Card>
    <Title>Number of species threatened with extinction (2021)</Title>
    <Subtitle>
      The IUCN Red List has assessed only a small share of the total known
      species in the world.
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

 


 

 
 
