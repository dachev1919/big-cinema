import {FunctionComponent, useEffect, useState} from 'react';
import Image from 'next/image';
import logo from '@/common/assets/images/logo.png';
import HeaderMenu from "@/common/components/layout/header/header-menu/HeaderMenu";
import {BellIcon, SearchIcon} from "@heroicons/react/solid";
import Link from 'next/link';
import kids from '@/common/assets/images/kids.png';
import styles from './Header.module.scss';
import useAuth from "@/hooks/useAuth";


interface IHeaderProps {
  menuHidden?: boolean;
  accountHidden?: boolean;
}

const Header: FunctionComponent<IHeaderProps> = ({menuHidden = false, accountHidden = false}) => {
  const [isSticky, setIsSticky] = useState(false);
  const {logout} = useAuth();

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
        <Link href='/'><Image className='cursor-pointer object-contain' src={logo} width={87} height={30} alt='logo'/></Link>
        <div className={`${menuHidden ? '!hidden' : ''}`}>
          <HeaderMenu />
        </div>
      </div>
      <div className={`${styles.right} ${accountHidden ? '!hidden' : ''}`}>
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
