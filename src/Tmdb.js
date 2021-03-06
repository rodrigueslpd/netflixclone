const API_KEY = "dc1220e7aa7d40e02d2752eeaf796a32";
const API_BASE = 'https://api.themoviedb.org/3';

/*

Originais da netflix
Recomandados em destaque
Melhores votados EM ALTA(TOPRATED)
Ação
Comédia
Terror
Romance
Documentários

*/

const basicFetch = async (endpoint) => {

	const req = await fetch(`${API_BASE}${endpoint}`);
	const json = await req.json();
	return json;

	return API_KEY;

}


export default{

	getHomeList: async () => {
		return [
			{
				slug: 'originals',
				title: 'Originais NETFLIX',
				items: await basicFetch(`/discover/tv?with_networks=213&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'trending',
				title: 'Recomendados pra você',
				items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'toprated',
				title: 'Em alta',
				items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'action',
				title: 'Ação',
				items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'comedy',
				title: 'Comédia',
				items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'horror',
				title: 'Terror',
				items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'romance',
				title: 'Romance',
				items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
			},
			{
				slug: 'documentary',
				title: 'Documentários',
				items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
			},
		];
		
	}

}
