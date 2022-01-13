import { Link } from "react-router-dom";
//route data
import routes from "../data/routes";
//css
import { ContainerFluid, FlexRowBetween } from "../styles/baseStyle";

const Navbar = () => {
  return (
    <ContainerFluid>
      <FlexRowBetween>
        {routes
          .filter((navItem) => navItem.isNav)
          .map((navItem, index) => (
            <Link key={index} to={navItem.path} aria-current="page">
              {navItem.title}
            </Link>
          ))}
      </FlexRowBetween>
    </ContainerFluid>
  );
};

export default Navbar;
