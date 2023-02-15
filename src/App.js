import "./App.scss";
import Layout from "./layout/Layout";
import Home from "./pages/home";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className='App'>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
