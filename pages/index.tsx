// import { NextPage, GetStaticProps } from 'next';
import { NextPage } from 'next';
import Home from '../src/modules/home/pages/Home';
import requests from '../src/utils/requests';
import { Movie } from '../src/@types/typings';
import {useEffect, useState} from "react";

// interface IHomePageProps {
// 	netflixOriginals: Movie[];
// 	trendingNow: Movie[];
// 	topRated: Movie[];
// 	actionMovies: Movie[];
// 	comedyMovies: Movie[];
// 	horrorMovies: Movie[];
// 	romanceMovies: Movie[];
// 	documentariesMovies: Movie[];
// }

// const HomePage: NextPage<IHomePageProps> = props => {
const HomePage: NextPage = () => {
	const [netflixOriginals, setNetflixOriginals] = useState<Movie[]>([]);
	const [trendingNow, setTrendingNow] = useState<Movie[]>([]);
	const [topRated, setTopRated] = useState<Movie[]>([]);
	const [actionMovies, setActionMovies] = useState<Movie[]>([]);
	const [comedyMovies, setComedyMovies] = useState<Movie[]>([]);
	const [horrorMovies, setHorrorMovies] = useState<Movie[]>([]);
	const [romanceMovies, setRomanceMovies] = useState<Movie[]>([]);
	const [documentariesMovies, setDocumentariesMovies] = useState<Movie[]>([]);

	useEffect(() => {
		async function fetchMovies() {
			const netflixOriginals = await fetch(requests.fetchNetflixOriginals).then(res => res.json());
			const trendingNow = await fetch(requests.fetchTrending).then(res => res.json());
			const topRated = await fetch(requests.fetchTopRated).then(res => res.json());
			const actionMovies = await fetch(requests.fetchActionMovies).then(res => res.json());
			const comedyMovies = await fetch(requests.fetchComedyMovies).then(res => res.json());
			const horrorMovies = await fetch(requests.fetchHorrorMovies).then(res => res.json());
			const romanceMovies = await fetch(requests.fetchRomanceMovies).then(res => res.json());
			const documentariesMovies = await fetch(requests.fetchDocumentariesMovies).then(res => res.json());

			setNetflixOriginals(netflixOriginals.results);
			setTrendingNow(trendingNow.results);
			setTopRated(topRated.results);
			setActionMovies(actionMovies.results);
			setComedyMovies(comedyMovies.results);
			setHorrorMovies(horrorMovies.results);
			setRomanceMovies(romanceMovies.results);
			setDocumentariesMovies(documentariesMovies.results);
		}

		fetchMovies();
	}, []);

	return (
		<Home
			trendingNow={trendingNow}
			topRated={topRated}
			actionMovies={actionMovies}
			comedyMovies={comedyMovies}
			netflixOriginals={netflixOriginals}
			horrorMovies={horrorMovies}
			romanceMovies={romanceMovies}
			documentariesMovies={documentariesMovies}
		/>
	);
};

export default HomePage;

// export const getStaticProps: GetStaticProps<
// 	IHomePageProps
// > = async () => {
// 	const [
// 		netflixOriginals,
// 		trendingNow,
// 		topRated,
// 		actionMovies,
// 		comedyMovies,
// 		horrorMovies,
// 		romanceMovies,
// 		documentariesMovies
// 	] = await Promise.all([
// 		fetch(requests.fetchNetflixOriginals).then(res => res.json()),
// 		fetch(requests.fetchTrending).then(res => res.json()),
// 		fetch(requests.fetchTopRated).then(res => res.json()),
// 		fetch(requests.fetchActionMovies).then(res => res.json()),
// 		fetch(requests.fetchComedyMovies).then(res => res.json()),
// 		fetch(requests.fetchHorrorMovies).then(res => res.json()),
// 		fetch(requests.fetchRomanceMovies).then(res => res.json()),
// 		fetch(requests.fetchDocumentariesMovies).then(res => res.json())
// 	]);
//
// 	return {
// 		props: {
// 			netflixOriginals: netflixOriginals.results,
// 			trendingNow: trendingNow.results,
// 			topRated: topRated.results,
// 			actionMovies: actionMovies.results,
// 			comedyMovies: comedyMovies.results,
// 			horrorMovies: horrorMovies.results,
// 			romanceMovies: romanceMovies.results,
// 			documentariesMovies: documentariesMovies.results
// 		}
// 	};
// };
