import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
//routes data
import routes from "./data/routes";
import { theme } from "./styles/theme";
import { Navbar, Footer } from "./base";
//css
import { Container } from "./styles/baseStyle";
import GlobalStyles from "./styles/Global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Container>
        <Routes>
          {routes.map((item, index) => (
            <Route key={index} path={item.path} element={<item.element />} />
          ))}
        </Routes>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
