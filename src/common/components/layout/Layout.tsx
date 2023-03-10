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
	signOut?: boolean;
}

const Layout: FC<PropsWithChildren<ILayout>> = ({
	children,
	padding = true,
	menuHidden = false,
	heightContent = false,
	accountHidden = false,
	signOut = false,
	...rest
}) => {
	return (
		<>
			<Meta {...rest} />
			<div className={`${styles.layout} ${heightContent ? '!h-auto' : ''}`}>
				<Header menuHidden={menuHidden} signOut={signOut} accountHidden={accountHidden} />
				<main
					className={`${styles.main} ${
						padding ? 'pl-4 pb-24 lg:space-y-24 lg:pl-16' : ''
					}`}
				>
					{children}
				</main>
			</div>
		</>
	);
};

export default Layout;
