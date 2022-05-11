import { BrowserRouter, Routes, Route } from "react-router-dom";
// hooks
import useData from "./hooks/useData";
// molecules
import Footer from "./component/molecules/footer/footer";
// organism
import Layout from "./component/organism/layout/layout";
// pages
import Login from "./component/pages/login";
import Products from "./component/pages/products";
import ProductInside from "./component/pages/product-inside";

const App = () => {
  // state
  const state = useData();

  return (
    <BrowserRouter>
      <Layout {...state}>
        <Routes>
          <Route path="/" element={<Login {...state} />} />
          <Route
            path="/products"
            element={
              <>
                <Products {...state} />
                <Footer />
              </>
            }
          />
          <Route
            path="/products/:store"
            element={
              <>
                <ProductInside {...state} />
                <Footer />
              </>
            }
          />

          <Route path="**" element={<Login {...state} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
