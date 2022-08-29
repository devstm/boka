import styles from '../../styles/Home.module.css';
import { Image } from 'antd';

function SliderItem({index}: any) {
  return (
    <div className={styles.slide}>
      <Image
        className={styles.sliderImage}
        src={
          'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg'
        }
        alt='slide1'
      />
      <p className={styles.slideTitle}>Image Title {index}</p>
    </div>
  );
}

export default SliderItem;
