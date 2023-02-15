// @vendors
import { array, string } from "prop-types";

// @components
import GridItem from "./grid-item";

// @styles
import styles from "./styles.module.scss";

const MainGrid = ({ data, title }) => {
  return (
    <div className={styles.mainContainer}>
      <h3>{title}</h3>
      <div className={styles.container}>
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
