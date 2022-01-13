import { Routes, Route } from "react-router-dom";
import routes from "./data/routes";
import { Navbar, Footer } from "./base";
//css
import { Container } from "./styles/baseStyle";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Routes>
          {routes.map((item, index) => (
            <Route key={index} path={item.path} element={<item.element />} />
          ))}
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
