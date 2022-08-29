import { Button } from 'antd';
import { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import style from '../styles/cards.module.css';

function BtnSlider() {
  const [btnActive, setBtnActive] = useState(false);
  function myArrow({ type, onClick, isEdge }: any) {
    return (
      <Button className={isEdge ? style.hide : style.arrow} onClick={onClick}>
        {type === 'PREV' ? (
          <svg
            width='12'
            height='21'
            viewBox='0 0 12 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.690026 12.0649L9.18003 20.5399C9.31947 20.6805 9.48537 20.7921 9.66816 20.8683C9.85095 20.9444 10.047 20.9836 10.245 20.9836C10.443 20.9836 10.6391 20.9444 10.8219 20.8683C11.0047 20.7921 11.1706 20.6805 11.31 20.5399C11.5894 20.2589 11.7462 19.8787 11.7462 19.4824C11.7462 19.0862 11.5894 18.706 11.31 18.4249L3.88503 10.9249L11.31 3.49994C11.5894 3.2189 11.7462 2.83872 11.7462 2.44244C11.7462 2.04617 11.5894 1.66599 11.31 1.38494C11.1711 1.24321 11.0054 1.13046 10.8226 1.05321C10.6398 0.975967 10.4435 0.93577 10.245 0.934946C10.0466 0.93577 9.85024 0.975967 9.66743 1.05321C9.48462 1.13046 9.31895 1.24321 9.18003 1.38494L0.690026 9.85994C0.537769 10.0004 0.416256 10.1709 0.333145 10.3606C0.250034 10.5504 0.207128 10.7553 0.207127 10.9624C0.207127 11.1696 0.250034 11.3745 0.333145 11.5643C0.416256 11.754 0.537769 11.9245 0.690026 12.0649Z'
              fill='#17505C'
            />
          </svg>
        ) : (
          <svg
            width='8'
            height='14'
            viewBox='0 0 8 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.54001 6.29004L1.88001 0.640037C1.78705 0.546308 1.67645 0.471914 1.55459 0.421145C1.43273 0.370377 1.30202 0.344238 1.17001 0.344238C1.038 0.344238 0.907295 0.370377 0.785436 0.421145C0.663576 0.471914 0.552975 0.546308 0.460012 0.640037C0.273761 0.827399 0.16922 1.08085 0.16922 1.34504C0.16922 1.60922 0.273761 1.86267 0.460012 2.05004L5.41001 7.05004L0.460012 12C0.273761 12.1874 0.16922 12.4409 0.16922 12.705C0.16922 12.9692 0.273761 13.2227 0.460012 13.41C0.552627 13.5045 0.663072 13.5797 0.784947 13.6312C0.906823 13.6827 1.03771 13.7095 1.17001 13.71C1.30232 13.7095 1.4332 13.6827 1.55508 13.6312C1.67695 13.5797 1.7874 13.5045 1.88001 13.41L7.54001 7.76004C7.64152 7.66639 7.72253 7.55274 7.77793 7.42624C7.83334 7.29974 7.86195 7.16314 7.86195 7.02504C7.86195 6.88693 7.83334 6.75033 7.77793 6.62383C7.72253 6.49733 7.64152 6.38368 7.54001 6.29004Z'
              fill='#17505C'
            />
          </svg>
        )}
      </Button>
    );
  }
  function myArrow2({ type, onClick, isEdge }: any) {
    return (
      <Button className={isEdge ? style.hide : style.blus} onClick={onClick}>
        {type === 'PREV' ? '-5' : '+5'}
      </Button>
    );
  }
  return (
    <div>
      <Carousel
        transitionMs={500}
        itemsToShow={3}
        itemsToScroll={1}
        pagination={false}
        renderArrow={myArrow}
      >
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            style={{ width: '98px', height: '34px', position: 'relative' }}
          >
            <Button
              className={`${style.btn} ${style.flexRc}`}
              onClick={() => {
                setBtnActive(!btnActive);
              }}
              key={i}
              type='primary'
              danger
            >
              Haircut
            </Button>
          </div>
        ))}
      </Carousel>
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
            <Button className={`${style.timeBtn} ${style.flexRc}`} key={i} type='primary' danger>
              8:00 am
            </Button>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default BtnSlider;
