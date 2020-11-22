import React, {useState} from "react";

export default function SearchMovies(){
    
    //states- input query, movies
    const [query, setQuery] = useState('');
    //create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]);
    
    const searchMovies = async (e) => {
        e.preventDefault();
                
        const url = `https://api.themoviedb.org/3/search/movie?api_key=1b8cfa76ed84d023c9e4dbe5000a4aa8&language=en-US&query=${query}&page=1&include_adult=true`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }
    
    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input border-dark" type="text" name="query"
                    placeholder="Search movie.."
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    required
                    />
                <button className="button bg-dark" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card border-dark" key={movie.id}>
                        <img className="card--image"
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title + ' poster'}
                            />
                        <div className="card--content">
                        <h3 className="card--title">{movie.title}</h3>
                        <hr />
                        <p><small>RELEASE DATE: {movie.release_date}</small></p>
                        <p><small>RATING: {movie.vote_average}</small></p>
                        <p className="card--desc"><small>PLOT:</small> {movie.overview}</p>
                        </div>

                    </div>
                ))}
            </div>    
        </>
    )
}