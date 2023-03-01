import React, {FC, useRef, useState} from 'react';
import { Movie } from '@/@types/typings';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
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
	const rowRef = useRef<HTMLDivElement>(null);
	const [isMoved, setIsMoved] = useState(false);

	// перенести в компонент thumbnails
	const arrowClickHandler = (direction: 'left' | 'right'): void => {
		setIsMoved(true);

		if (rowRef.current) {
			const { scrollLeft, clientWidth } = rowRef.current;

			const scrollTo =
				direction === 'left'
					? scrollLeft - clientWidth
					: scrollLeft + clientWidth;

			rowRef.current.scrollTo({left: scrollTo, behavior: 'smooth'});
		}
	};

	return (
		<section className={styles.list}>
			{list.map(({ movies, title }, index) => (
				<div className={styles.item} key={`home-list-${index}`}>
					<h2 className={styles.title}>{title}</h2>
					<div className={`${styles.movies}`}>
						<ChevronLeftIcon
							className={`${styles.left} ${!isMoved && 'hidden'}`}
							onClick={() => arrowClickHandler('left')}
						/>
						<div ref={rowRef} className={styles.thumbnails}>
							{movies.map(movie => (
								<Thumbnail key={movie.id} movie={movie} />
							))}
						</div>
						<ChevronRightIcon
							className={styles.right}
							onClick={() => arrowClickHandler('right')}
						/>
					</div>
				</div>
			))}
		</section>
	);
};

export default HomeCategoryList;
