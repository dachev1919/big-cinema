import { FC, PropsWithChildren } from 'react';
import styles from './Layout.module.scss';
import Meta from './meta/Meta';
import { ISeo } from './meta/meta.interface';
import Header from '@/common/components/layout/header/Header';

interface ILayout extends ISeo {
	padding?: boolean;
	menuHidden?: boolean;
	accountHidden?: boolean;
	heightContent?: boolean;
}

const Layout: FC<PropsWithChildren<ILayout>> = ({
	children,
	padding = true,
	menuHidden = false,
	heightContent = false,
	accountHidden = false,
	...rest
}) => {
	return (
		<>
			<Meta {...rest} />
			<div
				className={`${styles.layout} ${
					padding ? 'pl-4 pb-24 lg:space-y-24 lg:pl-16' : ''
				} ${heightContent ? '!h-auto' : ''}`}
			>
				<Header menuHidden={menuHidden} accountHidden={accountHidden} />
				<main className={styles.main}>{children}</main>
			</div>
		</>
	);
};

export default Layout;
