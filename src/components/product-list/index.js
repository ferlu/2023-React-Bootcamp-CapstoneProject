// @mocks
import categories from "../../mocks/en-us/product-categories.json";
import products from "../../mocks/en-us/featured-products.json";

// @components
import Sidebar from "./sidebar";
import MainGrid from "../main-grid";

// @styles
import styles from "./styles.module.scss";

const ProductList = () => {
	const handleCategoryClick = (category) => {
		console.log(category);
	};

	return (
		<div className={styles.container}>
			<div className={`${styles.sidebar}`}>
				<h3>Categories</h3>
				<Sidebar
					categories={categories.results}
					onCategoryClick={handleCategoryClick}
				/>
			</div>
			<div className={styles.mainGrid}>
				<MainGrid
					data={products.results}
					title=''
				/>
			</div>
		</div>
	);
};

export default ProductList;
