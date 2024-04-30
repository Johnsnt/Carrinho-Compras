import React, { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';


function SearchBar() {
    //pegar o valor e passaar para a função criada
    const [searchValue, setSearchValue] = useState('');
    

    //pegando valor dos produtos
    const {setProducts, setLoading} = useContext(AppContext)
    
    const handleSearch = async (event) => {
        //previne o comportamento padrão de recarregar a página.
        event.preventDefault();
        setLoading(true)
        //recebendo o texto do estado na função que busca os produtos.
        const products = await fetchProducts(searchValue);

        //setando o estado para o contexto que vai passar para o componente de produtos.
        setProducts(products)
        setLoading(false)
    }

   
    
    return (
        //Função executada a cada submição
        <form className='search-bar' onSubmit={handleSearch}>
            <input
                type="search"
                value={searchValue}
                placeholder="Buscar items"
                className="search_input"
                onChange={(e) => setSearchValue(e.target.value)}
                required />
            <button type="submit" className="search_button">
                <BsSearch />
            </button>
        </form>

    );
}

export default SearchBar;