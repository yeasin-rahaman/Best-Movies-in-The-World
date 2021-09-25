import React from 'react';
import '../Cart/Cart.css'

const Cart = (props) => {
    const { cart } = props || {}


    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.earn

    const total = cart.reduce(totalReducer, 0)


    return (
        <div>
            <h3>  <i className="fas fa-film"></i> Number of Movies:  {cart.length} </h3>
            <br />
            <br />
            <div className="movie-name">
                <ul>
                    {
                        cart.map(movie => <li><h4>{movie.name}</h4></li>)
                    }
                </ul>
            </div>
            <br />
            <br />
            <hr />
            <h4>Total Earn: {total} $</h4>


        </div>
    )

};

export default Cart;

