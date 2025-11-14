import SearchBar from "../components/SearchBar";
import React, { useState, useEffect } from 'react';

const Store = () => {

    const [productsState, setProductsState] = useState([])

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then((productsArray) => {
                const newProductsState = productsArray.map((product) => {
                    return product.title
                })
                setProductsState(newProductsState)
            });
    }, [])

    const hasProducts = productsState.length > 0

    return (
        <div>
            <h1>Fake Store</h1>
            <p>Welcome to the Store!</p>
            <p>Here you can buy fake products!</p>

            <div>
                {hasProducts ? <SearchBar products={productsState}/> : "Loading..."}
            </div>

        </div>
    )
}

export default Store
