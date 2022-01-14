import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
//api
import { BASE_URL } from "../data/api";
//loading
import loadingVid from "../img/loading.mp4";
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
    return (
      <video width="320" height="240">
        <source src={loadingVid} type="video/mp4" />
      </video>
    );
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
