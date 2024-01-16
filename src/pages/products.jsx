import CardProduct from "../components/fragments/card_product";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="images/shoes.jpg"></CardProduct.Header>
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          dolorum soluta, labore obcaecati voluptatibus ipsa tempora tenetur
          modi quam molestias.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000"></CardProduct.Footer>
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="images/shoes.jpg"></CardProduct.Header>
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          dolorum soluta, labore obcaecati voluptatibus ipsa tempora tenetur
          modi quam molestias.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000"></CardProduct.Footer>
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
