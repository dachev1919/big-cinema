import React, { FC, useRef, useState } from 'react';
import { Movie } from '@/@types/typings';
import Image from 'next/image';
import styles from './Thumbnail.module.scss';
import { thumbUrl } from '@/constants/movie-url';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '@/common/atoms/modalAtom';

interface IThumbnailProps {
	movies: Movie[];
}

const Thumbnail: FC<IThumbnailProps> = ({ movies }) => {
	const rowRef = useRef<HTMLDivElement>(null);
	const [isMoved, setIsMoved] = useState(false);
	const [showModal, setShowModal] = useRecoilState(modalState);
	const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

	const arrowClickHandler = (direction: 'left' | 'right'): void => {
		setIsMoved(true);

		if (rowRef.current) {
			const { scrollLeft, clientWidth } = rowRef.current;

			const scrollTo =
				direction === 'left'
					? scrollLeft - clientWidth
					: scrollLeft + clientWidth;

			rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
		}
	};

	return (
		<>
			<div ref={rowRef} className={styles.thumbnails}>
				<ChevronLeftIcon
					className={`${styles.left} ${!isMoved && 'hidden'}`}
					onClick={() => arrowClickHandler('left')}
				/>
				{movies.map && movies.map(movie => (
					<div
						key={movie.id}
						className={styles.thumbnail}
						onClick={() => {
							setCurrentMovie(movie);
							setShowModal(true);
						}}
					>
						<Image
							src={`${thumbUrl}${movie.backdrop_path || movie.poster_path}`}
							width={260}
							height={144}
							alt='film thumbnail'
						/>
					</div>
				))}
				<ChevronRightIcon
					className={styles.right}
					onClick={() => arrowClickHandler('right')}
				/>
			</div>
		</>
	);
};

export default Thumbnail;
