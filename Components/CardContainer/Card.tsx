import style from '../../styles/cards.module.css';
import { Image, Rate } from 'antd';
import BtnSlider from '../BtnSlider';
function Card() {
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
        <p>Hair X Pression Unisex Hair..</p>
        <div className={style.rate}>
          <Rate allowHalf defaultValue={2.5} />
          <h3 className={`${style.reviews} ${style.flexR} ${style.text}`}>
            (26 Reviews) 4.1
          </h3>
        </div>
        <div className={`${style.location} ${style.flexR}`}>
          <div className={style.locationText}>
            <p className={style.locationTextAway}> 5 mile away </p>
            <p className={style.locationLong}>
              400 S 2nd St Louisville, KY 40202
            </p>
          </div>
          <div className={style.locationIcon}>
            <svg
              width='16'
              height='20'
              viewBox='0 0 16 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8 8.80009C8.39556 8.80009 8.78224 8.68279 9.11114 8.46303C9.44004 8.24326 9.69638 7.93091 9.84776 7.56545C9.99913 7.2 10.0387 6.79787 9.96157 6.40991C9.8844 6.02195 9.69392 5.66558 9.41421 5.38587C9.13451 5.10617 8.77814 4.91569 8.39018 4.83852C8.00222 4.76135 7.60009 4.80095 7.23463 4.95233C6.86918 5.1037 6.55682 5.36005 6.33706 5.68895C6.1173 6.01785 6 6.40453 6 6.80009C6 7.33052 6.21071 7.83923 6.58579 8.2143C6.96086 8.58937 7.46957 8.80009 8 8.80009ZM7.29 15.7101C7.38296 15.8038 7.49356 15.8782 7.61542 15.929C7.73728 15.9797 7.86799 16.0059 8 16.0059C8.13201 16.0059 8.26272 15.9797 8.38458 15.929C8.50644 15.8782 8.61704 15.8038 8.71 15.7101L12.8 11.6101C13.75 10.6606 14.397 9.45077 14.6593 8.13355C14.9216 6.81632 14.7873 5.45089 14.2735 4.20998C13.7597 2.96906 12.8894 1.9084 11.7727 1.16215C10.656 0.415894 9.34309 0.0175781 8 0.0175781C6.65691 0.0175781 5.344 0.415894 4.22731 1.16215C3.11062 1.9084 2.24033 2.96906 1.72652 4.20998C1.2127 5.45089 1.07845 6.81632 1.34073 8.13355C1.60301 9.45077 2.25005 10.6606 3.2 11.6101L7.29 15.7101ZM3.23 6.34009C3.29832 5.62711 3.52502 4.93838 3.89352 4.3242C4.26203 3.71002 4.76305 3.1859 5.36 2.79009C6.1442 2.27519 7.06186 2.00085 8 2.00085C8.93814 2.00085 9.8558 2.27519 10.64 2.79009C11.233 3.18454 11.7311 3.70549 12.0987 4.31547C12.4663 4.92546 12.6942 5.60932 12.7659 6.31787C12.8376 7.02643 12.7514 7.74208 12.5135 8.41334C12.2756 9.08461 11.8919 9.69482 11.39 10.2001L8 13.5901L4.61 10.2001C4.10752 9.69972 3.72293 9.09362 3.48421 8.42589C3.24548 7.75816 3.15864 7.04561 3.23 6.34009V6.34009ZM15 18.0001H1C0.734784 18.0001 0.48043 18.1054 0.292893 18.293C0.105357 18.4805 0 18.7349 0 19.0001C0 19.2653 0.105357 19.5197 0.292893 19.7072C0.48043 19.8947 0.734784 20.0001 1 20.0001H15C15.2652 20.0001 15.5196 19.8947 15.7071 19.7072C15.8946 19.5197 16 19.2653 16 19.0001C16 18.7349 15.8946 18.4805 15.7071 18.293C15.5196 18.1054 15.2652 18.0001 15 18.0001Z'
                fill='#FF914D'
              />
            </svg>
          </div>
        </div>
        <BtnSlider />
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

export default Card;
