 import { Card, Title, AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
];
 

export default () => (
  <Card>
    <Title>Newsletter revenue over time (USD)</Title>
    <AreaChart
      data={chartdata}
      categories={["SemiAnalysis", "The Pragmatic Engineer"]}
      dataKey="date"
      height="h-72"
      colors={["indigo", "cyan"]} 
      marginTop="mt-4"
    />
  </Card>
);




/* import { Card, Title, DonutChart } from '@tremor/react';

const cities = [
    {
        name: 'New York',
        sales: 9800,
    },
    {
        name: 'London',
        sales: 4567,
    },
    {
        name: 'Hong Kong',
        sales: 3908,
    },
    {
        name: 'San Francisco',
        sales: 2400,
    },
    {
        name: 'Singapore',
        sales: 1908,
    },
    {
        name: 'Zurich',
        sales: 1398,
    },
];

 

export default () => (
    <Card maxWidth="max-w-lg">
        <Title>Sales by City</Title>
        <DonutChart
            data={ cities }
            category="sales"
            dataKey="name" 
            marginTop="mt-6"
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
        />
    </Card>
); */


/* import { Card, DonutChart, Title } from "@tremor/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdataadmin } from "../../redux/actions/index";

const MetricTwo = () => {
  const dispatch = useDispatch();
  const { Comprasgenerales } = useSelector((state) => state.Comprasgenerales);

  useEffect(() => {
    dispatch(getdataadmin());
  }, []);

  return (
    <Card marginTop="mt-6">
      <Title>Ventas por Ciudad</Title>
      <DonutChart
        data={Comprasgenerales[0]}
        category="Cantidad"
        dataKey="Ciudad"
        marginTop="mt-6"
        colors={[
          "red",
          "fuchsia",
          "orange",
          "gray",
          "pink",
          "purple",
          "lime",
          "yellow",
          "violet",
          "red",
          "fuchsia",
          "orange",
          "gray",
          "pink",
          "purple",
          "lime",
          "yellow",
          "violet",
          "red",
          "fuchsia",
          "orange",
          "gray",
          "pink",
          "purple",
          "lime",
          "yellow",
          "violet",
          "red",
          "fuchsia",
          "orange",
          "gray",
          "pink",
          "purple",
          "lime",
          "yellow",
          "violet",
          "red",
          "fuchsia",
          "orange",
          "gray",
          "pink",
          "purple",
          "lime",
          "yellow",
          "violet",
        ]}
      />
    </Card>
  );
};

export default MetricTwo;
 */
/* const cities = [
  {
    name: "New York",
    Sales: 9800,
  },
  {
    name: "London",
    Sales: 5849,
  },
  {
    name: "Hong Kong",
    Sales: 3650,
  },
  {
    name: "San Francisco",
    Sales: 2800,
  },
  {
    name: "Singapore",
    Sales: 3820,
  },
  {
    name: "Zurich",
    Sales: 6811,
  },
]; */