import style from '../../styles/cards.module.css';
import { Button, Image, Rate } from 'antd';
import Carousel from 'react-elastic-carousel';

import MyTabs from './Tabs';
function myArrow2({ type, onClick, isEdge }: any) {
  return (
    <Button className={isEdge ? style.hide : style.blus} onClick={onClick}>
      {type === 'PREV' ? '-5' : '+5'}
    </Button>
  );
}
function FCard() {
  return (
    <div className={style.card}>
      <div className={style.cardImage}>
        <Image
          height={136}
          width={299}
          preview={false}
          style={{ borderRadius: '7px' }}
          src='https://miro.medium.com/max/775/0*rZecOAy_WVr16810'
        />
      </div>
      <div className={`${style.cardHeader} ${style.text}`}>
        <div style={{ marginTop: '10px' }} className={style.flexR}>
          <div>
            <p>Hair X Pression Un Hair..</p>
            <div className={style.rate}>
              <Rate allowHalf defaultValue={2.5} />
              <h3 className={`${style.reviews} ${style.flexR} ${style.text}`}>
                (26 Reviews) 4.1
              </h3>
            </div>
          </div>
          <div className={style.avatar}></div>
        </div>
        <div>
          <MyTabs />
        </div>
        <Button className={style.manicure}>Manicure</Button>
        <Carousel
          itemsToShow={3}
          itemsToScroll={5}
          pagination={false}
          renderArrow={myArrow2}
        >
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              style={{
                width: '72px !important',
                height: '34px',
                position: 'relative',
              }}
            >
              <Button
                className={`${style.timeBtn} ${style.flexRc}`}
                key={i}
                type='primary'
                danger
              >
                8:00 am
              </Button>
            </div>
          ))}
        </Carousel>
      </div>
      <div className={`${style.cardPrice} ${style.flexR}`}>
        <h5>Booked x today</h5>
        <div className={style.desc}>
          <div className={style.old}>$31.99</div>
          <div className={style.new}>
            $29.92
            <div className={style.descVal}>20%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FCard;
