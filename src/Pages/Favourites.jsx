import "../CSS/Favourites.css"
import { useMovieContext } from "../Contexts/MovieContext";
import MovieCard from "../myComponents/MovieCard";

function Favourites() {
  const {favourites} = useMovieContext();

  if (favourites) {

    return (
      <>
    <div className="favorites">
      <h2>Your Favourites</h2>
    </div>
    <div className="movies-grid">
    {favourites.map((movie) => (
      <MovieCard movie={movie} key={movie.id}/>
    ))}
  </div>
  </>
    )
  }
}

export default Favourites