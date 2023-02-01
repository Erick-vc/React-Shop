import React, {useState, useEffect} from "react";
// npm install axios
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  /** No puedes pasarle como primera funcion un async
   *  ya que esta devuelve una promise y el effect no 
   * devuelve, por esa razon se usa dentro de la funcion el async
   * */ 
  
  useEffect(() => {

    async function Traer() {
      try {
        const response = await axios(API);
        setProducts(response.data);
      } catch (e) {
        console.error(e)
      }
    }; Traer()


  }, []);

  return products;
};

export default useGetProducts;
