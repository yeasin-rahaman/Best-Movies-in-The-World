import React, { useEffect, useState } from "react";
import details from "../details/details";
import Product from "../Product/Product";

const Shop = () => {

    const [movies, setmovies] = useState([]);
    // details  e product rakhar jnne state
    const [details, setdetails] = useState([]);
    // jekhanei state shekanei event handler declare korbo


    const handleAddMovies = (product) => {

        const newdetails = [...details, product]
        setdetails(newdetails)
    }


    useEffect(() => {
        fetch("/moviesData.json")
            .then((res) => res.json())
            .then((data) => setmovies(data));
    }, []);

    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    {/* moviesgulu  load korbo */}

                    <div className="row">
                        {
                            movies.map(product =>
                                <Product
                                    product={product}
                                    handleAddMovies={handleAddMovies}
                                >

                                </Product>)
                        }


                    </div>
                </div>
                <div className="col-md-3">
                    {/* ekhane amra details calculation korbo */}
                    <details
                        details={details}
                    >

                    </details>
                </div>
            </div>
        </div>
    );
};

export default Shop;