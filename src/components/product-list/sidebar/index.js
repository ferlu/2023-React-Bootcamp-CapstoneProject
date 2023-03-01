// @vendors
import { useState } from "react";

// @styles
import styles from "./styles.module.scss";

var classNames = require("classnames");

const Sidebar = ({ categories, onCategoryClick }) => {
	const [selectedFilters, setSelectedFilters] = useState({});

	const handleClick = (name) => {
		onCategoryClick(name);
		setSelectedFilters({ ...selectedFilters, [name]: !selectedFilters[name] });
	};

	return (
		<>
			{categories?.map((item) => {
				const { name } = item.data;

				let filterClass = classNames([styles.category], {
					[styles.active]: selectedFilters[name],
				});

				return (
					<p
						key={name}
						className={filterClass}
						onClick={() => handleClick(name)}>
						{name}
					</p>
				);
			})}
		</>
	);
};

export default Sidebar;
