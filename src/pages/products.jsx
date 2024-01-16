import Button from "../components/elements/button";
import CardProduct from "../components/fragments/card_product";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp 1.000.000",
    image: "images/shoes.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exceptu dolorum soluta, labore obcaecati voluptatibus ipsa tempora tenetur modi quam molestias.",
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp 7.00.000",
    image: "images/shoes.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exceptu dolorum soluta, labore obcaecati voluptatibus ipsa tempora tenetur modi quam molestias.",
  },
  {
    id: 3,
    name: "Sepatu Skena",
    price: "Rp 2.000.000",
    image: "images/shoes.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exceptu dolorum soluta, labore obcaecati voluptatibus ipsa tempora tenetur modi quam molestias.",
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
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
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image}></CardProduct.Header>
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price}></CardProduct.Footer>
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
