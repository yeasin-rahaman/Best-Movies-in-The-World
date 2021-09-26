import React from 'react';
import '../Movie/Movie.css'

const Movies = (props) => {
    const { name, img, director, earn, leadingCast, type, year } = props.movie || {}
    return (
        <div className="col ">
            <div className="card h-100 movie-card">
                <img src={img} className="card-img-top cart-image p-2" alt="..." />
                <div className="card-body">
                    <h3 className="card-title"><b>Name:</b> {name}</h3>
                    <h5><b>Director: {director}</b></h5>
                    <h5><b>Leading Cast: {leadingCast}</b></h5>
                    <h5><b>Type:</b> {type}</h5>
                    <h5><b>Year:</b> {year}</h5>
                    <h5><b>Earn:</b>$ {earn}</h5>
                </div>
                <div className="card-footer">
                    <button onClick={() => props.handleAddMovies(props.movie)} type="button" className="btn btn-hover color-1"> <i className="fas fa-cart-plus"></i> Add Movies</button>
                </div>
            </div>
        </div>

    );
};

export default Movies;