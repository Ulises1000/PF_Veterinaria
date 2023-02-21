import {
    BadgeDelta,
    Block,
    Card,
    ColGrid,
    Flex,
    Metric,
    ProgressBar,
    Text,
  } from "@tremor/react";
  import React, { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
/*import { getdataadmin } from "../../redux/actions/index"; */
  
  const MetricOne = () => {
    const dispatch = useDispatch();
     const { Comprasgenerales } = useSelector((state) => state.filters.product);
  
   /*  useEffect(() => {
      dispatch(getdataadmin()); 
    }, [dispatch]);  */
  
    const ventaBruta = 1000000;
    const metaMensual = 5000000;
    const ptajeCumplimiento = (ventaBruta * 100) / metaMensual;
    const ptajeACumplir = 100 - ptajeCumplimiento;
    /* 19% impuesto
    10% gastos
    30% ganancianeta
    total 59% */
    const gananciaNeta = (ventaBruta * 59) / 100;
    const objGananciaMm = (metaMensual * 59) / 100;
    const ptajeCumplimientoNeto = (gananciaNeta * 100) / objGananciaMm;
    const ptajeACumplirNeto = 100 - ptajeCumplimientoNeto;
  
    const data = [
      {
        title: "Venta bruta",
        metric: `$ ${Math.trunc(ventaBruta)}`,
        progress: `${Math.trunc(ptajeCumplimiento)}`,
        target: `$${metaMensual} M/m`,
        delta: `${Math.trunc(ptajeACumplir)} %/c`,
        deltaType: "aumentoModerado",
      },
      {
        title: "Ganancia Neta",
        metric: `$ ${Math.trunc(gananciaNeta)}`,
        progress: `${Math.trunc(ptajeCumplimientoNeto)}`,
        target: `${objGananciaMm} O/gnm`,
        delta: `${Math.trunc(ptajeACumplirNeto)}%/c`,
        deltaType: "increase",
      },
      {
        title: "Clientes",
        metric: "$ 1,699",
        progress: 50.2,
        target: "$ 9,000",
        delta: "11.6%",
        deltaType: "moderateDecrease",
      },
      {
        title: "Stock",
        metric: "$ 1,699",
        progress: 50.2,
        target: "$ 9,000",
        delta: "11.6%",
        deltaType: "moderateDecrease",
      }
    ];
  
    return (
      <ColGrid
        numColsMd={2}
        numColsLg={3}
        marginTop="mt-6"
        gapX="gap-x-6"
        gapY="gap-y-6"
        decorationColor="green"
      >
        {data.map((e) => (
          <Card key={e.title}>
            {/* <div className="bg-stone-300"> */}
            <Flex alignItems="items-start">
              <Block>
                <Text>{e.title}</Text>
                <Metric>{e.metric}</Metric>
              </Block>
              <BadgeDelta text={e.delta} />
            </Flex>
            <Flex marginTop="mt-4" spaceX="space-x-2">
              <div className="bg-green-200 rounded">
                <Text>{`${e.progress}% (${e.metric})`}</Text>
              </div>
              <Text>{e.target}</Text>
            </Flex>
            <ProgressBar percentageValue={e.progress} marginTop="mt-3" />
            {/* </div> */}
          </Card>
        ))}
      </ColGrid>
    );
  };
  
  export default MetricOne;