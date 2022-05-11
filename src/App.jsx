import { BrowserRouter, Routes, Route } from "react-router-dom";
// hooks
import useData from "./hooks/useData";
// organism
import Layout from "./component/organism/layout/layout";
// pages
import Login from "./component/pages/login";
import Products from "./component/pages/products";

const App = () => {
  // state
  const state = useData();

  return (
    <BrowserRouter>
      <Layout {...state}>
        <Routes>
          <Route path="/" element={<Login {...state} />} />
          <Route path="/products" element={<Products {...state} />} />
          <Route path="**" element={<Login {...state} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
