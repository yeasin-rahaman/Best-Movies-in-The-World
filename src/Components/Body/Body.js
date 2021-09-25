import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Movie from '../Movie/Movie';

const Body = () => {
    const [movies, setMovies] = useState([]);
    // to set state in the carts
    const [cart, setCart] = useState([]);
    // state for event handler 
    const handleAddMovies = (movie) => {
        const newCart = [...cart, movie];
        setCart(newCart)
    }


    useEffect(() => {
        fetch("/movies.json")
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col-md-9 ">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            movies.map(movie => <Movie
                                movie={movie}
                                handleAddMovies={handleAddMovies}
                            ></Movie>)
                        }

                    </div>
                </div>
                <div className="col-md-3">
                    {/* Calculation  */}
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>


    );
};

export default Body;