import React from 'react';
    import { CategoryBar, Card, Flex, Text } from "@tremor/react";
    import { useDispatch, useSelector } from "react-redux";

const MetricUsers = () => {    
      const dispatch = useDispatch();
      const getUs = useSelector((state) => state.filters.users);
     
    
      const num =getUs.length;
      const porcentaje = (num/100)*100
      return(
       <Card maxWidth="max-w-full" >
        <Flex>
          <Text>Porcentaje Usuarios Registrados</Text>
          <Text>{porcentaje}%</Text>
        </Flex>
        <CategoryBar
          categoryPercentageValues={[10, 10 , 45, 35]}     
          colors={["rose","orange","yellow","emerald" ]}
          percentageValue={porcentaje}
          marginTop="mt-1"
        />
        </Card>
      )      
}

export default MetricUsers;
