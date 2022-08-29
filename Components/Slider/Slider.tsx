import Carousel from 'react-elastic-carousel';
import styles from '../../styles/Home.module.css';
import SliderItem from './SliderItem';

function Slider() {
  return (
    <div className={styles.slider}>
      <Carousel  itemsToShow={8} itemsToScroll={5} >
        {[...Array(16)].map((_, i) => (
          <SliderItem index={i} key={i} />
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
{
}
