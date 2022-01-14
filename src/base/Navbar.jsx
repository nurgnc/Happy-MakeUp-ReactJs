//route data
import routes from "../data/routes";
//css
import { ContainerFluid, Flex } from "../styles/baseStyle";
import { Nav, Logo, StyledLink } from "../styles/Navbar.styled";
//logo
import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <ContainerFluid>
      <Nav>
        <Logo src={logo} alt="logo" />

        <Flex>
          {routes
            .filter((navItem) => navItem.isNav)
            .map((navItem, index) => (
              <StyledLink key={index} to={navItem.path} aria-current="page">
                {<navItem.icon size={25} />} <span>{navItem.title}</span>
              </StyledLink>
            ))}
        </Flex>
      </Nav>
    </ContainerFluid>
  );
};

export default Navbar;
