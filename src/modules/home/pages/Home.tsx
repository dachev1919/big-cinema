import React, {FC} from 'react';
import Layout from '@/common/components/layout/Layout';
import Banner from '@/modules/home/banner/Banner';
import { Movie } from '@/@types/typings';
import HomeCategoryList from '@/modules/home/home-catefory-list/HomeCategoryList';
import useAuth from "@/hooks/useAuth";
import {useRecoilValue} from "recoil";
import {modalState} from "@/common/atoms/modalAtom";
import Modal from "@/common/components/modal/Modal";
import Plans from "@/modules/plans/pages/Plans";

interface IHomeProps {
	netflixOriginals: Movie[];
	trendingNow: Movie[];
	topRated: Movie[];
	actionMovies: Movie[];
	comedyMovies: Movie[];
	horrorMovies: Movie[];
	romanceMovies: Movie[];
	documentariesMovies: Movie[];
}

const Home: FC<IHomeProps> = ({
	trendingNow,
	topRated,
	actionMovies,
	comedyMovies,
	horrorMovies,
	romanceMovies,
	documentariesMovies,
	netflixOriginals
}) => {
	const movies = [
		{
			movies: trendingNow,
			title: 'Trending Now'
		},
		{
			movies: topRated,
			title: 'Top Rated'
		},
		{
			movies: actionMovies,
			title: 'Action Thrillers'
		},
		{
			movies: comedyMovies,
			title: 'Comedies'
		},
		{
			movies: horrorMovies,
			title: 'Scary Movies'
		},
		{
			movies: romanceMovies,
			title: 'Romance Movie'
		},
		{
			movies: documentariesMovies,
			title: 'Documentaries'
		}
	];
	const { loading } = useAuth();
	const showModal = useRecoilValue(modalState);

	if (loading) return null;

	return (
		<Layout title='Home' description='Home page description'>
			<Banner netflixOriginals={netflixOriginals} />
			<HomeCategoryList list={movies} />
			{showModal && <Modal/>}
		</Layout>
	);
};

export default Home;
