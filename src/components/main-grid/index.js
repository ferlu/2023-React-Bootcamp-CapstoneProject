// @vendors
import { array, string } from "prop-types";

// @components
import GridItem from "./grid-item";

// @styles
import styles from "./styles.module.scss";

var classNames = require("classnames");
const MainGrid = ({ data, title }) => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.title}>
				<h2>{title}</h2>
			</div>
			<div className={styles.gridContainer}>
				{data?.map((item) => {
					const { name, category, price, mainimage: mainImg } = item.data;
					return (
						<GridItem
							key={item.id}
							name={name}
							category={category}
							price={price}
							mainImg={mainImg}
						/>
					);
				})}
			</div>
		</div>
	);
};

MainGrid.propTypes = {
	data: array.isRequired,
	title: string.isRequired,
};

MainGrid.defaultProps = {
	data: [],
};

export default MainGrid;
