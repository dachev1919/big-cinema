import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { Movie } from '@/@types/typings';
import { baseUrl } from '@/constants/movie-url';
import styles from './Banner.module.scss';
import { FaPlay } from 'react-icons/fa';
import { InformationCircleIcon } from '@heroicons/react/solid';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '@/common/atoms/modalAtom';

interface IBannerProps {
	netflixOriginals: Movie[];
}

const Banner: FC<IBannerProps> = ({ netflixOriginals }) => {
	const [movie, setMovie] = useState<Movie | null>(null);
	const [showModal, setShowModal] = useRecoilState(modalState);
	const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

	useEffect(() => {
		setMovie(
			netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
		);
		setInterval(() => {
			setMovie(
				netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
			);
		}, 10000);
	}, [netflixOriginals]);
	return (
		<div className={styles.banner}>
			<div className={styles.image}>
				{movie?.backdrop_path || movie?.poster_path ? (
					<Image
						width={1920}
						height={1080}
						src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
						alt={movie?.title || 'film image'}
					/>
				) : (
					''
				)}
			</div>
			<h1 className={styles.title}>
				{movie?.title || movie?.name || movie?.original_name}
			</h1>
			<p className={styles.text}>{movie?.overview}</p>
			<div className={styles.buttons}>
				<button
					className='playButton primary'
					onClick={() => {
						setCurrentMovie(movie);
						setShowModal(true);
					}}
				>
					<FaPlay className={styles.icon} /> Play
				</button>
				<button
					className='playButton secondary'
					onClick={() => {
						setCurrentMovie(movie);
						setShowModal(true);
					}}
				>
					More Info <InformationCircleIcon className={styles.icon} />
				</button>
			</div>
		</div>
	);
};

export default Banner;
