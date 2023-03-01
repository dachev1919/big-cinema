import { FC } from 'react';
import styles from './HeaderMenu.module.scss';

interface IHeaderMenuLinks {
  id: string;
  title: string;
}

interface IHeaderMenuProps {}

const LINKS: IHeaderMenuLinks[] = [
  {
    id: 'header-link-1',
    title: 'Home',
  },
  {
    id: 'header-link-2',
    title: 'TV Shows',
  },
  {
    id: 'header-link-3',
    title: 'Movies',
  },
  {
    id: 'header-link-4',
    title: 'New & Popular',
  },
  {
    id: 'header-link-5',
    title: 'My List',
  }
]

const HeaderMenu: FC<IHeaderMenuProps> = () => {
  return (
    <ul className={styles.menu}>
      {LINKS.map(({id, title}) => <li className={styles.link} key={id}>{title}</li>)}
    </ul>
  );
};

export default HeaderMenu;
