/* eslint-disable react/no-unknown-property */
import Icons from './Icons';
import SideBar from './SideBar';
import style from '../../styles/index.module.css';
import { Button } from 'antd';

function Nav() {
  return (
    <>
      <div className={style.aboveNav}>
        <Icons />
        <SideBar />
      </div>
      <div className={style.nav}>
        <div className={style.logo}>
          <span>
            <svg
              width='37'
              height='36'
              viewBox='0 0 37 36'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0 6.02366C0 2.69715 2.74292 0.000488281 6.12649 0.000488281H30.4911C33.8746 0.000488281 36.6176 2.69715 36.6176 6.02365V29.9773C36.6176 33.3038 33.8746 36.0005 30.4911 36.0005H6.12649C2.74292 36.0005 0 33.3038 0 29.9773V6.02366Z'
                fill='#FF914D'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M19.0227 28.6407C22.7364 28.6407 25.747 25.6809 25.747 22.0298C25.747 18.3787 22.7364 15.4189 19.0227 15.4189C15.3089 15.4189 12.2983 18.3787 12.2983 22.0298C12.2983 25.6809 15.3089 28.6407 19.0227 28.6407ZM19.0227 31.5498C24.3706 31.5498 28.706 27.2875 28.706 22.0298C28.706 16.772 24.3706 12.5098 19.0227 12.5098C13.6747 12.5098 9.33936 16.772 9.33936 22.0298C9.33936 27.2875 13.6747 31.5498 19.0227 31.5498Z'
                fill='black'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M15.5981 16.8524C18.1354 16.8524 20.1924 14.8301 20.1924 12.3356C20.1924 9.84098 18.1354 7.81874 15.5981 7.81874C13.0607 7.81874 11.0038 9.84098 11.0038 12.3356C11.0038 14.8301 13.0607 16.8524 15.5981 16.8524ZM15.5981 18.4887C19.0547 18.4887 21.8568 15.7339 21.8568 12.3356C21.8568 8.93725 19.0547 6.18237 15.5981 6.18237C12.1415 6.18237 9.33936 8.93725 9.33936 12.3356C9.33936 15.7339 12.1415 18.4887 15.5981 18.4887Z'
                fill='black'
              />
              <path
                d='M9.33936 12.3354L11.7307 16.2247L11.1107 21.9135H9.33936V12.3354Z'
                fill='black'
              />
            </svg>
          </span>
          <h1 className={style.title}>Boka</h1>
        </div>
        <div className={style.actions}>
          <Button className={style.homeBtn} type='primary' danger>
            Sign up
          </Button>
          <Button className={style.login} danger> login</Button>
        </div>
      </div>
    </>
  );
}

export default Nav;
