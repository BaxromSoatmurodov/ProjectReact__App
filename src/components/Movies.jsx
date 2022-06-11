import Movie from "../components/Movie";
export default function Movies(props) {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => {
          return <Movie key={movie.imdbID} {...movie} />;
        })
      ) : (
        <h3>Nothing found</h3>
      )}
    </div>
  );
}
