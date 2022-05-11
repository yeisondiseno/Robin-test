import { BrowserRouter, Routes, Route } from "react-router-dom";
// organism
import Layout from "./component/organism/layout/layout";
// pages
import Login from "./component/pages/login";
import Products from "./component/pages/products";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="**" element={<Login />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
