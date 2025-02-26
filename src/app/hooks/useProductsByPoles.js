import React from 'react'

const useProductsByPoles = ({productos}) => {
  
    return productos.filter(
        (producto) => producto.Polo =="UNIPOLAR" || producto.Polo =="BIPOLAR" || producto.Polo =="TRIPOLAR" || producto.Polo =="TETRAPOLAR"
    );
  
}

export default useProductsByPoles