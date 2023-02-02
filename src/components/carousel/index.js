// @vendors
import { useState } from "react";
import { array } from "prop-types";

// @icons
import { ChevronLeft, ChevronRight } from "../../assets/icons/chevrons";
import { Heart } from "../../assets/icons/heart";

// @styles
import styles from "./styles.module.scss";

const Carousel = ({ data }) => {
  const [activeBanner, setActiveBanner] = useState(0);

  const handleChevronClick = (position) => {
    if (position === "right") {
      setActiveBanner((prevActive) => {
        let next = prevActive + 1;
        return next > data?.length - 1 ? 0 : next;
      });
    } else {
      setActiveBanner((prevActive) => {
        let previous = prevActive - 1;
        return previous < 0 ? data?.length - 1 : previous;
      });
    }
  };

  const chevrons = (
    <div className={styles.chevron}>
      <button onClick={() => handleChevronClick("left")}>
        <ChevronLeft />
      </button>
      <button onClick={() => handleChevronClick("right")}>
        <ChevronRight />
      </button>
    </div>
  );

  const indicator = data?.map((banner, i) => {
    return (
      <button
        key={`${banner.id}-indicator`}
        className={i === activeBanner ? styles.fill : ""}
        onClick={() => setActiveBanner(i)}>
        <Heart />
      </button>
    );
  });

  return (
    <header className={styles.carouselContainer}>
      {data?.map((banner, i) => {
        let { title, description, main_image: mainImg } = banner.data;
        const formatTitle = title.split("-");

        const imgStyle = {
          backgroundImage: `url(${mainImg.url})`,
          height: mainImg.height,
          width: mainImg.width,
        };

        return (
          <div
            key={banner.id}
            className={`${
              i === activeBanner ? styles.bannerWrapperVisible : styles.bannerWrapperHidden
            }`}>
            <div className={`${styles.container}`}>
              <div className={styles.info}>
                <h3>{formatTitle[0]}</h3>
                <h2>{formatTitle[1]}</h2>
                <p className={styles.description}>{description[0].text}</p>
              </div>
              <div className={styles.bgImg} style={imgStyle} />
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
