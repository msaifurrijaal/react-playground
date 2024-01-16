import { useState } from "react";
import Button from "../components/elements/button";
import CardProduct from "../components/fragments/card_product";
import Counter from "../components/fragments/counter";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 1000000,
    image: "images/shoes.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exceptu dolorum soluta, labore obcaecati voluptatibus ipsa tempora tenetur modi quam molestias.",
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: 700000,
    image: "images/shoes.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exceptu dolorum soluta, labore obcaecati voluptatibus ipsa tempora tenetur modi quam molestias.",
  },
  {
    id: 3,
    name: "Sepatu Skena",
    price: 20000000,
    image: "images/shoes.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exceptu dolorum soluta, labore obcaecati voluptatibus ipsa tempora tenetur modi quam molestias.",
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
  };
  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image}></CardProduct.Header>
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              ></CardProduct.Footer>
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="my-5 flex justify-center">
        <Counter />
      </div>
    </>
  );
};

export default ProductsPage;
