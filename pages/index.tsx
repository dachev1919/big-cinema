import { NextPage, GetStaticProps } from 'next';
import Home from '../src/modules/home/pages/Home';
import requests from '../src/utils/requests';
import { Movie } from '../src/@types/typings';
import serialize from 'serialize-javascript';

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
			netflixOriginals: JSON.parse(serialize(netflixOriginals.results)),
			trendingNow: JSON.parse(serialize(trendingNow.results)),
			topRated: JSON.parse(serialize(topRated.results)),
			actionMovies: JSON.parse(serialize(actionMovies.results)),
			comedyMovies: JSON.parse(serialize(comedyMovies.results)),
			horrorMovies: JSON.parse(serialize(horrorMovies.results)),
			romanceMovies: JSON.parse(serialize(romanceMovies.results)),
			documentariesMovies: JSON.parse(serialize(documentariesMovies.results))
		}
	};
};
