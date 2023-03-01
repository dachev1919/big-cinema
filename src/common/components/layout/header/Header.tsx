import {FunctionComponent, useEffect, useState} from 'react';
import Image from 'next/image';
import logo from '@/common/assets/images/logo.png';
import HeaderMenu from "@/common/components/layout/header/header-menu/HeaderMenu";
import {BellIcon, SearchIcon} from "@heroicons/react/solid";
import Link from 'next/link';
import kids from '@/common/assets/images/kids.png';
import styles from './Header.module.scss';


interface IHeaderProps {}

const Header: FunctionComponent<IHeaderProps> = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    };
  }, []);

  return (
    <header className={`${styles.header}${isSticky ? ' bg-[#141414]' : ''}`}>
      <div className={styles.left}>
        <Image className='cursor-pointer object-contain' src={logo} width={87} height={30} alt='logo'/>
        <HeaderMenu />
      </div>
      <div className={styles.right}>
        <SearchIcon className='hidden sm:inline h-6 w-6'/>
        <p className='hidden lg:inline'>Kids</p>
        <BellIcon className='h-6 w-6'/>
        <Link href='/account'>
          <Image className='cursor-pointer rounded' src={kids} alt='kids'/>
        </Link>
      </div>
    </header>
  );
};

export default Header;
