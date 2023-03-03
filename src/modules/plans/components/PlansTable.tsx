import React, { FC } from 'react';
import styles from './PlansTable.module.scss';
import { plansType } from '@/modules/plans/pages/Plans';
import {CheckIcon} from "@heroicons/react/outline";

interface IData {
	id: plansType;
	unit_amount: number;
	videoQuality: string;
  resolution: string;
}

const DATA: IData[] = [
	{
		id: 'basic',
		unit_amount: 2900,
		videoQuality: 'Good',
    resolution: '480p'
	},
	{
		id: 'premium',
		unit_amount: 3600,
		videoQuality: 'Best',
    resolution: '4K+HDR'
	},
	{
		id: 'standard',
		unit_amount: 4800,
		videoQuality: 'Better',
    resolution: '1080p'
	}
];

interface IPlansTableProps {
	selectedPlan: plansType;
}

const PlansTable: FC<IPlansTableProps> = ({ selectedPlan }) => {
	return (
		<table className={styles.table}>
			<tbody className='divide-y divide-[gray]'>
				<tr className={styles.row}>
					<td className={styles.title}>Monthly price</td>
					{DATA.map((item, index) => (
						<td
							className={`${styles.data} ${
								selectedPlan === item.id ? 'text-[#e50914]' : 'text-[gray]'
							}`}
							key={'data' + index + item.id}
						>
							AED{item.unit_amount / 100}
						</td>
					))}
				</tr>

				<tr className={styles.row}>
					<td className={styles.title}>Video quality</td>
					{DATA.map((item, index) => (
						<td
							className={`${styles.data} ${
								selectedPlan === item.id ? 'text-[#e50914]' : 'text-[gray]'
							}`}
							key={'data' + index + item.id}
						>
							{item.videoQuality}
						</td>
					))}
				</tr>

        <tr className={styles.row}>
          <td className={styles.title}>Resolution</td>
          {DATA.map((item, index) => (
            <td
              className={`${styles.data} ${
                selectedPlan === item.id ? 'text-[#e50914]' : 'text-[gray]'
              }`}
              key={'data' + index + item.id}
            >
              {item.videoQuality}
            </td>
          ))}
        </tr>

        <tr className={styles.row}>
          <td className={styles.title}>Watch on your TV, computer, mobile phone and tablet</td>
          {DATA.map((item, index) => (
            <td
              className={`${styles.data} ${
                selectedPlan === item.id ? 'text-[#e50914]' : 'text-[gray]'
              }`}
              key={'data' + index + item.id}
            >
              <CheckIcon className='inline-block h-8 w-8' />
            </td>
          ))}
        </tr>
			</tbody>
		</table>
	);
};

export default PlansTable;
