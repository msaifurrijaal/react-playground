import { useEffect, useRef, useState } from "react";
import CardProduct from "../components/fragments/card_product";
import { getProducts } from "../services/product.service";
import TableCart from "../components/fragments/table_cart";
import Navbar from "../components/layouts/navbar";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  // useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header
                  image={product.image}
                  id={product.id}
                ></CardProduct.Header>
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                ></CardProduct.Footer>
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
      {/* <div className="my-5 flex justify-center">
        <Counter />
      </div> */}
    </>
  );
};

export default ProductsPage;
