import { Products, Navbar } from "./components";
import { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
function App() {
  useEffect(() => {
    fetchProducts();
  }, []);

  const [products, setProducts] = useState();

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  console.log(products);
  return (
    <div className="App">
      <Products />
      <Navbar />
    </div>
  );
}

export default App;
