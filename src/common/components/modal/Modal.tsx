import React, { FC, useEffect, useState } from 'react';
import MuiModal from '@mui/material/Modal';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '@/common/atoms/modalAtom';
import { VolumeOffIcon, VolumeUpIcon, XIcon } from '@heroicons/react/outline';
import { Element, Genre } from '@/@types/typings';
import ReactPlayer from 'react-player/lazy';
import styles from './Modal.module.scss';

const Modal: FC = () => {
	const [showModal, setShowModal] = useRecoilState(modalState);
	const [movie, setMovie] = useRecoilState(movieState);
	const [trailer, setTrailer] = useState('');
	const [genres, setGenres] = useState<Genre[]>([]);
	const [muted, setMuted] = useState<boolean>(true);

	useEffect(() => {
		if (!movie) return;

		async function fetchMovie() {
			// const data = await fetch(
			// 	`https://api.themoviedb.org/3/${
			// 		movie?.media_type === 'tv' ? 'tv' : 'movie'
			// 	}/${movie?.id}?api_key=${
			// 		process.env.NEXT_PUBLIC_API_KEY
			// 	}&language=en-US&append_to_response=videos`
			// )
			// 	.then(response => response.json())
			// 	.catch(error => console.log(error));
			const data = await fetch(
				`https://api.themoviedb.org/3/${
					movie?.media_type === 'tv' ? 'tv' : 'movie'
				}/${
					movie?.id
				}?api_key=2df371a6bcba8d998e6152eb1375a2af&language=en-US&append_to_response=videos`
			)
				.then(response => response.json())
				.catch(error => console.log(error));

			if (data?.videos) {
				const index = data.videos.results.findIndex(
					(element: Element) => element.type === 'Trailer'
				);
				setTrailer(data.videos?.results[index]?.key);
			}
			if (data?.genres) {
				setGenres(data.genres);
			}
		}

		fetchMovie();
	}, [movie]);

	const handleClose = () => {
		setShowModal(false);
	};

	return (
		<MuiModal
			className={`${styles.modal} !top-7`}
			open={showModal}
			onClose={handleClose}
		>
			<>
				<button
					className={`modalButton !z-40 ${styles.close}`}
					onClick={handleClose}
				>
					<XIcon className='h-6 w-6' />
				</button>
				<div className={styles.content}>
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${trailer}`}
						width='100%'
						height='100%'
						style={{ position: 'absolute', top: '0', left: '0' }}
						playing
						muted={muted}
					/>
					<div className={styles.control}>
						<button className='modalButton' onClick={() => setMuted(!muted)}>
							{muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
						</button>
						<div className={styles.buttons}></div>
					</div>
				</div>
				<div className={styles.info}>
					<div className={styles.wrapper}>
						<div className={styles.top}>
							<p className={styles.match}>
								{(movie?.vote_average * 10).toFixed(1)}% Match
							</p>
							<p className='font-light'>
								{movie?.release_date || movie?.first_air_date}
							</p>
							<div className={styles.hd}>HD</div>
						</div>
						<div className={styles.footer}>
							<p className='w5/6'>{movie?.overview}</p>
							<div className={styles.data}>
								<div className={styles.item}>
									<span className={styles.span}>Genres:</span>
									{genres.map(genre => genre.name).join(', ')}
								</div>
								<div className={styles.item}>
									<span className={styles.span}>Original language:</span>
									{movie?.original_language}
								</div>
								<div className={styles.item}>
									<span className={styles.span}>Total votes:</span>
									{movie?.vote_count}
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		</MuiModal>
	);
};

export default Modal;
