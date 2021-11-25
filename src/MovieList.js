import { Movie } from './Movie';

// import { MovieList } from "./MovieList.js"
export function MovieList(props) {
    return (<section className="movie-list">
        {props.movies.map(({
            poster, name, summary, rating
        }) => <Movie name={name} poster={poster} summary={summary} rating={rating} />)}
    </section>);
}
