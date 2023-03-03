import React, { FC } from 'react';
import Layout from '@/common/components/layout/Layout';
import styles from './Account.module.scss';
import Image from 'next/image';
import accountDate from '@/common/assets/images/account-date.png';
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import Membership from "@/modules/account/components/membership/Membership";

const Account: FC = () => {
	const now = new Date();
	const registrationDate = new Date(now.getTime() - 180000);
	const {logout} = useAuth();

	return (
		<Layout
			title=''
			menuHidden={true}
			heightContent={true}
			padding={false}
			signOut={true}
			description='Plans'
		>
			<section className={styles.account}>
				<div className={styles.header}>
					<h1 className={styles.title}>Account</h1>
					<div className={styles.date}>
						<Image src={accountDate} width={25} height={25} alt='acc date' />
						<p className={styles.text}>Member since {registrationDate.toLocaleString()}</p>
					</div>
				</div>

        <Membership/>

        <div className={styles.block}>
          <h4>Plan Details</h4>
          <div>
            Basic
          </div>
          <Link className={styles.link} href='/plans'>Change plan</Link>
        </div>
				<div className={`${styles.block}`}>
					<h4>Settings</h4>
					<p className={`${styles.link} md:!text-left`} onClick={logout}>Sign out of all devices</p>
				</div>
			</section>
		</Layout>
	);
};

export default Account;
