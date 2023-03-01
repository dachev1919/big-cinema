import { FC, PropsWithChildren } from 'react';
import styles from './Layout.module.scss';
import Meta from './meta/Meta';
import { ISeo } from './meta/meta.interface';
import Header from "@/common/components/layout/header/Header";

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
  return (
    <>
      <Meta {...rest} />
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;