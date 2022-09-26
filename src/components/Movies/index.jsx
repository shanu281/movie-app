import React from "react";
import Data from "../Data";
import './style.css'

class Movies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active : "",
          
        }
    }

    handleClick = (i) => this.setState({active: i})

    
    render() {
        
        return (
            <>
                {
                    Data.map((movie , i) =>
                        <div className="movie-container">

                            <div className="img-container">
                                <img src={movie.Images} alt={movie.Title} />
                            </div>

                            <div className= {this.state.active === i ? "hide-info" : "title"}>
                                <h1>{movie.Title}</h1>
                                <h2>{movie.Released}</h2>
                            </div>


                            <div className="info-btn">
                                <button onClick={() => this.handleClick(i)}  >More Info</button>
                            </div>
                            <div className= {this.state.active === i ? "show-info" : "hide-info"}>
                                <button  className = "close-btn">X</button>
                                <h1>Movie Name: {movie.Title}</h1>
                                <h2>Released Date: {movie.Released}</h2>
                                <h2>Runtime : {movie.Runtime}</h2>
                                <h2>Genre : {movie.Genre}</h2>
                                <h2>Director : {movie.Director}</h2>
                                <h2>Writer : {movie.Writer}</h2>
                                <h2>Actors : {movie.Actors}</h2>
                                <h2>Plot :{movie.Plot}</h2>
                                <h2>Country :{movie.Country}</h2>
                                <h2>imdbVotes :{movie.imdbVotes}</h2>
                                <h2>imdbID :{movie.imdbID}</h2>
                                <h2>Type :{movie.Type}</h2>
                                <h2>Rated : {movie.Rated}</h2>


                            </div>
                            <div className="imdb">
                                <h3>IMDB :{movie.imdbRating}</h3>
                            </div>

                        </div>

                    )
                }

            </>
        )
    }
}
export default Movies