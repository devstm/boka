import styles from '../styles/Home.module.css';

function DiscountContent() {
  return (
    <div className={styles['discountContent']}>
      <h3 className={styles['discountContentTitle']}>
        {' '}
        Treat your mom for Mother’s Day
      </h3>
      <p className={styles['discountContentDesc']}>
        20% off on selected treatments
      </p>
    </div>
  );
}

export default DiscountContent;
