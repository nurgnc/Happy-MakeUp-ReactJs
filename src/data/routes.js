import {
  About,
  Categories,
  Home,
  ProductDetail,
  ProductSearch,
  Products,
} from "../pages";

const routes = [
  { title: "Home", element: Home, path: "/", isNav: true },
  { title: "About", element: About, path: "/about", isNav: true },
  { title: "Products", element: Products, path: "/products", isNav: true },
  {
    title: "Product Detail",
    element: ProductDetail,
    path: "/products/:productId",
    isNav: false,
  },
  {
    title: "Product Search",
    path: "/search",
    element: ProductSearch,
    isNav: false,
  },
  {
    title: "Categories",
    path: "/categories",
    element: Categories,
    isNav: true,
  },
];

export default routes;
