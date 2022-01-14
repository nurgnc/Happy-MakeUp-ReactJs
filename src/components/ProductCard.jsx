import { StyledCard, ProductLink } from "../styles/Card.styled";

const ProductCard = ({ product }) => {
  return (
    <StyledCard>
      <div>
        <img src={product.image_link} alt={product.name} />
      </div>
      <div>
        <ProductLink to={`${product.id}`} product={product}>
          {product.name}
        </ProductLink>
        <p>{product.brand}</p>
      </div>
    </StyledCard>
  );
};

export default ProductCard;
