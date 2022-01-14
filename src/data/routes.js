import {
  About,
  Categories,
  Home,
  ProductDetail,
  ProductSearch,
  Products,
} from "../pages";
//icons
import { AiFillHome } from "react-icons/ai";
import { RiBookOpenFill } from "react-icons/ri";
import { GiLipstick } from "react-icons/gi";
import { MdCategory } from "react-icons/md";

const routes = [
  { title: "Home", element: Home, path: "/", icon: AiFillHome, isNav: true },
  {
    title: "About",
    element: About,
    path: "/about",
    icon: RiBookOpenFill,
    isNav: true,
  },
  {
    title: "Products",
    element: Products,
    path: "/products",
    icon: GiLipstick,
    isNav: true,
  },
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
    icon: MdCategory,
    element: Categories,
    isNav: true,
  },
];

export default routes;
