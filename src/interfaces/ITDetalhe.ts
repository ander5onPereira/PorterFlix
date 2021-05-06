export interface ITDetalhe {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection: any,
  budget: number,
  genres: Array<ITGenre>,
  homepage: string,
  id: number,
  imdb_id: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: Array<ITCompanie>,
  production_countries: Array<ITCountrie>,
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: Array<ITLanguage>,
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number

}
interface ITLanguage {
  english_name: string,
  iso_639_1: string,
  name: string
}
interface ITCountrie {
  iso_3166_1: string,
  name: string
}
interface ITCompanie {
  id: number,
  logo_path: string,
  name: string,
  origin_country: string
}
interface ITGenre {
  id: number,
  name: string
}