import React, { FC, useState } from 'react';
import Layout from '@/common/components/layout/Layout';
import styles from './Plans.module.scss';
import { CheckIcon } from '@heroicons/react/outline';
import PlansTable from '@/modules/plans/components/PlansTable';

const PLANS: string[] = [
	'Watch all you want. Ad-free.',
	'Recommendations just for you.',
	'Change or cancel your plan anytime.'
];

export type plansType = 'basic' | 'premium' | 'standard';

interface IProducts {
	name: string;
	id: plansType;
}

const PRODUCTS: IProducts[] = [
	{
		name: 'Basic',
		id: 'basic'
	},
	{
		name: 'Premium',
		id: 'premium'
	},
	{
		name: 'Standard',
		id: 'standard'
	}
];

interface IPlansProps {}

const Plans: FC<IPlansProps> = () => {
	const [selectedPlan, setSelectedPlan] = useState<plansType>('premium');

	const subscribeHandler = () => {

	}

	return (
		<Layout
			title=''
			heightContent={true}
			padding={false}
			signOut={true}
			description='Plans'
			menuHidden={true}
		>
			<section className={styles.plans}>
				<h1>Choose the plan that's right for you</h1>
				<ul className={styles.list}>
					{PLANS.map((plan, index) => (
						<li key={plan + index}>
							<CheckIcon />
							{plan}
						</li>
					))}
				</ul>
				<div className={styles.nameplates}>
					<div className={styles.wrapper}>
						{PRODUCTS.map(product => (
							<div
								key={product.id}
								className={`${styles.item} ${
									selectedPlan === product.id ? 'opacity-100' : 'opacity-60'
								}`}
                onClick={() => setSelectedPlan(product.id)}
							>
								{product.name}
							</div>
						))}
					</div>
					<PlansTable selectedPlan={selectedPlan} />
					<button onClick={subscribeHandler} className={`form-button ${styles.subscribe}`}>Subscribe</button>
				</div>
			</section>
		</Layout>
	);
};

export default Plans;
