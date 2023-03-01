// @vendors
import React from "react";
import { func } from "prop-types";

// @utils
import { ALL_PRODUCTS } from "../../utils/constants";

// @mocks
import banners from "../../mocks/en-us/featured-banners.json";
import categories from "../../mocks/en-us/product-categories.json";
import products from "../../mocks/en-us/featured-products.json";

// @components
import Carousel from "../../components/carousel";
import InlineGrid from "../../components/inline-grid";
import MainGrid from "../../components/main-grid";

// @styles
import styles from "./styles.module.scss";

const Home = ({ render }) => {
	return (
		<div className={styles.container}>
			<Carousel data={banners.results} />
			<InlineGrid data={categories.results} />
			<div className={styles.gridContainer}>
				<MainGrid
					data={products.results}
					title='Our Products'
				/>
			</div>
			<button
				className={styles.productList}
				onClick={() => render("product-list")}>
				{ALL_PRODUCTS}
			</button>
		</div>
	);
};

Home.propTypes = {
	render: func.isRequired,
};

Home.defaultProps = {};

export default Home;
