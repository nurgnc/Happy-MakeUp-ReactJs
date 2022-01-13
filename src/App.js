import { Routes, Route } from "react-router-dom";
import routes from "./data/routes";
import { Navbar, Footer } from "./base";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {routes.map((item, index) => (
          <Route key={index} path={item.path} element={<item.element />} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
