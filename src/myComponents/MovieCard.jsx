import "../CSS/MovieCard.css"
import { useMovieContext } from "../Contexts/MovieContext";
function MovieCard({movie}){
  const {addToFavourites, isFavourite, removeFromFavourites} = useMovieContext();

  function onFavouriteClick(e){
    e.preventDefault();
    if (isFavourite(movie.id)){
      removeFromFavourites(movie.id);
    } else {
      addToFavourites(movie);
    }
  }

  return (
    <>
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
          <div className="movie-overlay">
            <button className={`favourite-btn ${isFavourite(movie.id) ? "active" : ""}`} onClick={onFavouriteClick}> 🤍 </button>
          </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
    </>
  );
}

export default MovieCard