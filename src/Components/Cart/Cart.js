import React from 'react';
import '../Cart/Cart.css'

const Cart = (props) => {
    const { cart } = props || {}


    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.earn

    const total = cart.reduce(totalReducer, 0)


    return (
        <div className="">

            <div className="card cart-bg">
                <h3>  <i className="fas fa-film mt-5"></i> Number of Movies:  {cart.length} </h3>
                <hr />

                <div className="movie-name">
                    <h4>Movie Name</h4>
                    <ul>
                        {
                            cart.map(movie => <li key={movie.name}> {movie.name}
                            </li>)
                        }
                    </ul>
                </div>
                <br />
                <br />
                <hr />
                <h4>Total Earn: {total} $</h4>

            </div>

        </div>
    )

};

export default Cart;


