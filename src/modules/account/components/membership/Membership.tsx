import React, { FC } from 'react';
import styles from './Membership.module.scss';
import useAuth from "@/hooks/useAuth";

const Membership: FC = () => {
  const now = new Date();
  const membershipDate = new Date(now.getTime() + 18000000000);
  const {user} = useAuth();

  return (
    <div className={styles.membership}>
      <div className={styles.canceling}>
        <h4>Membership & Billing</h4>
        <button className={styles.cancel}>Cancel Membership</button>
      </div>
      <div className={styles.info}>
        <div className={styles.user}>
          <div>
            <p className='font-medium'>{user?.email}</p>
            <p className='text-[gray]'>Password: ***********</p>
          </div>
          <div className='md:text-right'>
            <p className={styles.link}>Change email</p>
            <p className={styles.link}>Change password</p>
          </div>
        </div>
        <div className={styles.end}>
          <div>
            <p>Your membership will end on {membershipDate.toLocaleString()}</p>
          </div>
          <div className='md:text-right'>
            <p className={styles.link}>Manage payment info</p>
            <p className={styles.link}>Add backup payment method</p>
            <p className={styles.link}>Billing Details</p>
            <p className={styles.link}>Change billing day</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
