// @vendors
import { useState } from "react";

// @components
import Layout from "./layout/Layout";
import Home from "./pages/home";

// @hooks
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";

// @styles
import "./App.scss";
import ProductList from "./components/product-list";

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);
  const [renderPage, setRenderPage] = useState("home");

  return (
    <div className='App'>
      <Layout render={setRenderPage}>
        {renderPage === "home" ? <Home render={setRenderPage} /> : <ProductList />}
      </Layout>
    </div>
  );
}

export default App;
