import { UserOutlined } from '@ant-design/icons';
import { AutoComplete, Input, Image } from 'antd';
import styles from '../styles/Home.module.css';
import React from 'react';

const renderTitle = (title: string) => (
  <span
    style={{
      height: '24px',
      width: '110px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: '#02323D',
      fontSize: '16px',
    }}
  >
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13 9H11V5C11 4.73478 10.8946 4.48043 10.7071 4.29289C10.5196 4.10536 10.2652 4 10 4C9.73478 4 9.48043 4.10536 9.29289 4.29289C9.10535 4.48043 9 4.73478 9 5V10C9 10.2652 9.10535 10.5196 9.29289 10.7071C9.48043 10.8946 9.73478 11 10 11H13C13.2652 11 13.5196 10.8946 13.7071 10.7071C13.8946 10.5196 14 10.2652 14 10C14 9.73478 13.8946 9.48043 13.7071 9.29289C13.5196 9.10536 13.2652 9 13 9ZM10 0C8.02218 0 6.08879 0.58649 4.44429 1.6853C2.7998 2.78412 1.51808 4.3459 0.761202 6.17317C0.00432521 8.00043 -0.193708 10.0111 0.192144 11.9509C0.577996 13.8907 1.5304 15.6725 2.92893 17.0711C4.32745 18.4696 6.10928 19.422 8.04909 19.8079C9.9889 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9996 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87103 17.5308 5.55543 16.6518C4.23984 15.7727 3.21446 14.5233 2.60896 13.0615C2.00346 11.5997 1.84503 9.99113 2.15371 8.43928C2.4624 6.88743 3.22432 5.46197 4.34314 4.34315C5.46196 3.22433 6.88743 2.4624 8.43927 2.15372C9.99112 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1571 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18Z'
        fill='#17505C'
      />
    </svg>

    {title}
  </span>
);

const renderItem = (title: string, image: string) => ({
  value: title,
  label: (
    <div className={styles.selectItem}>
      <span>
        <Image width={44} src={image} alt={title} />
      </span>
      {title}
    </div>
  ),
});

const options = [
  {
    label: renderTitle('Hair Salons'),
    options: [
      renderItem('AntDesign', 'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg'),
      renderItem('AntDesign UI', 'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg'),
    ],
  },
];

function Selection() {
  return (
    <AutoComplete
      dropdownClassName='certain-category-search-dropdown'
      dropdownMatchSelectWidth={382}
      options={options}
    >
      <Input.Search size='large' placeholder='Hair Salon' />
    </AutoComplete>
  );
}

export default Selection;
