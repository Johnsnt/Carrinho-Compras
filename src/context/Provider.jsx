import React from 'react';
import AppContext from './AppContext';
import { useState } from 'react';

export default function Provider({ children }) {

    //compartilhar o estado com os produtos
    const [products, setProducts] = useState([]);
    //Estado para controlar o loading
    const [loading, setLoading] = useState(true);
    //Contexto para a lista de produtos no carrinho
    const [cartItems, setCartItems] = useState([]);
    //Fechar e Abrir o Carrinho
    const [isCartVisible, setIsCartVisible] = useState(false)

    const value = {
        products, 
        setProducts,
        loading,
        setLoading,
        cartItems, 
        setCartItems,
        isCartVisible, 
        setIsCartVisible
    }


    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}


/**
 * Provider é o componente que vai prover os dados e o consumer são os que vão consumir
 * 
 * 
 */