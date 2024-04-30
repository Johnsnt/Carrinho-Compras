import React, { useContext, useEffect, useState } from "react";
import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loadingpage';
import AppContext from "../../context/AppContext";

function Products() {
    //valores de estado passados via contexto
    const {products, setProducts, loading, setLoading} = useContext(AppContext)

    useEffect(() => {
        fetchProducts('Touhou').then((res) => {
            setProducts(res);
            setLoading(false)
        });
    }, []);

    

    return (
        
        (loading && <Loading />) || (<section className="products container">
            {
                products.map((product, index) => <ProductCard key={index}
                    //passando basicamente o objeto inteiro
                    data={product}
                />)
            }
        </section>) 
    )

    
}

export default Products;