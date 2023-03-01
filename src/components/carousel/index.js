// @vendors
import { useState } from "react";
import { array } from "prop-types";

// @icons
import { ChevronLeft, ChevronRight } from "../../assets/icons/chevrons";
import { Square } from "../../assets/icons/square";

// @styles
import styles from "./styles.module.scss";

var classNames = require("classnames");

const Carousel = ({ data }) => {
	const [activeBanner, setActiveBanner] = useState(0);

	const handleNextClick = () => {
		setActiveBanner((prevActive) => {
			let next = prevActive + 1;
			return next > data?.length - 1 ? 0 : next;
		});
	};

	const handlePrevClick = () => {
		setActiveBanner((prevActive) => {
			let previous = prevActive - 1;
			return previous < 0 ? data?.length - 1 : previous;
		});
	};

	const chevrons = (
		<div className={styles.chevron}>
			<button onClick={handlePrevClick}>
				<ChevronLeft />
			</button>
			<button onClick={handleNextClick}>
				<ChevronRight />
			</button>
		</div>
	);

	const indicator = data?.map((banner, i) => {
		var indicatorClass = classNames({
			[styles.fill]: i === activeBanner,
		});

		return (
			<button
				key={`${banner.id}-indicator`}
				className={indicatorClass}
				onClick={() => setActiveBanner(i)}>
				<Square />
			</button>
		);
	});

	return (
		<header className={styles.carouselContainer}>
			{data.map((banner, i) => {
				let { title, description, main_image: mainImg } = banner.data;
				const [itemTitle, subtitle] = title.split("-");

				const imgStyle = {
					backgroundImage: `url(${mainImg.url})`,
					height: mainImg.height,
					width: mainImg.width,
				};

				return (
					<div
						key={banner.id}
						className={`${
							i === activeBanner
								? styles.bannerWrapperVisible
								: styles.bannerWrapperHidden
						}`}>
						<div className={styles.container}>
							<div className={styles.info}>
								<h3>{itemTitle}</h3>
								<h2>{subtitle}</h2>
								<p className={styles.description}>{description[0].text}</p>
							</div>
							<div
								className={styles.bgImg}
								style={imgStyle}
							/>
						</div>
					</div>
				);
			})}
			{chevrons}
			<div className={styles.indicator}>{indicator}</div>
		</header>
	);
};

Carousel.propTypes = {
	data: array.isRequired,
};

Carousel.defaultProps = {
	data: [],
};

export default Carousel;
