import React, {FC} from 'react';
import { Movie } from '@/@types/typings';
import styles from './HomeList.module.scss';
import Thumbnail from '@/modules/home/home-catefory-list/thumbnail/Thumbnail';

interface IMoviesCategory {
	// When using firebase
	// movies: Movie[] | DocumentData[]
	movies: Movie[];
	title: string;
}

interface IHomeCategoryListProps {
	list: IMoviesCategory[];
}

const HomeCategoryList: FC<IHomeCategoryListProps> = ({ list }) => {


	return (
		<section className={styles.list}>
			{list.map(({ movies, title }, index) => (
				<div className={styles.item} key={`home-list-${index}`}>
					<h2 className={styles.title}>{title}</h2>
					<div className={`${styles.movies}`}>
						<Thumbnail movies={movies} />
					</div>
				</div>
			))}
		</section>
	);
};

export default HomeCategoryList;
