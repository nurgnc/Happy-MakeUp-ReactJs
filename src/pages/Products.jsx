import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
//api
import { BASE_URL } from "../data/api";
//css
import { Container, Grid } from "../styles/baseStyle";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}`)
      .then((response) => response.json())
      .then((results) => {
        setLoading(false);
        setProducts(results);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <Container>
      <Grid>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
