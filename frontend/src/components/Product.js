import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const getDetails = async () => {
            const { data } = await axios.get('/details');
            setDetails(data);
        };

        getDetails();
    }, []);

    return (
        <>
            {details.map((detail) => {
                const { id, title, desc, wishlist } = detail;
                return (
                    <div key={id} className="card text-white bg-secondary mb-3">
                        <h1>{title}</h1>
                        <h4>{desc}</h4>
                        <h5>wishlist : {wishlist}</h5>
                    </div>
                );
            })}
        </>
    );
};

export default Product;
