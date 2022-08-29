import Link from 'next/link';
import style from '../../styles/cards.module.css';
import Card from './Card';
import FCard from './FreeCard';
import Carousel from 'react-elastic-carousel';

function CardContainer() {
  return (
    <div className={`${style.cardContainer} ${style.flexC}`}>
      <div className={`${style.containerHeader} ${style.flexR}`}>
        <h3 className={`${style.HeaderText} ${style.text}`}>Card Container</h3>
        <div className={`${style.headerIcon}`}>
          <Link href={'/'}>
            <a className={`${style.viewMore} ${style.text}`}>view more</a>
          </Link>
        </div>
      </div>
      <div className={`${style.cardWrapper} ${style.flexR}`}>
        <Carousel
          className={style.cardWrapper}
          itemsToShow={4}
          itemsToScroll={1}
          pagination={false}
        >
          <Card />
          <FCard />
          <Card />
          <FCard />
          <Card />
          <FCard />
          <Card />
          <FCard />
          <Card />
          <FCard />
          <Card />
        </Carousel>
      </div>
    </div>
  );
}

export default CardContainer;
