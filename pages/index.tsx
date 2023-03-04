import { NextPage, GetStaticProps } from 'next';
import Home from '../src/modules/home/pages/Home';
import requests from '../src/utils/requests';
import { Movie } from '../src/@types/typings';

interface IHomePageProps {
	netflixOriginals: Movie[];
	trendingNow: Movie[];
	topRated: Movie[];
	actionMovies: Movie[];
	comedyMovies: Movie[];
	horrorMovies: Movie[];
	romanceMovies: Movie[];
	documentariesMovies: Movie[];
}

const HomePage: NextPage<IHomePageProps> = props => {
	return (
		<Home
			trendingNow={props.trendingNow}
			topRated={props.topRated}
			actionMovies={props.actionMovies}
			comedyMovies={props.comedyMovies}
			netflixOriginals={props.netflixOriginals}
			horrorMovies={props.horrorMovies}
			romanceMovies={props.romanceMovies}
			documentariesMovies={props.documentariesMovies}
		/>
	);
};

export default HomePage;

export const getStaticProps: GetStaticProps<
	IHomePageProps
> = async () => {
	const [
		netflixOriginals,
		trendingNow,
		topRated,
		actionMovies,
		comedyMovies,
		horrorMovies,
		romanceMovies,
		documentariesMovies
	] = await Promise.all([
		fetch(requests.fetchNetflixOriginals).then(res => res.json()),
		fetch(requests.fetchTrending).then(res => res.json()),
		fetch(requests.fetchTopRated).then(res => res.json()),
		fetch(requests.fetchActionMovies).then(res => res.json()),
		fetch(requests.fetchComedyMovies).then(res => res.json()),
		fetch(requests.fetchHorrorMovies).then(res => res.json()),
		fetch(requests.fetchRomanceMovies).then(res => res.json()),
		fetch(requests.fetchDocumentariesMovies).then(res => res.json())
	]);

	return {
		props: {
			netflixOriginals: netflixOriginals.results,
			trendingNow: trendingNow.results,
			topRated: topRated.results,
			actionMovies: actionMovies.results,
			comedyMovies: comedyMovies.results,
			horrorMovies: horrorMovies.results,
			romanceMovies: romanceMovies.results,
			documentariesMovies: documentariesMovies.results
		}
	};
};
