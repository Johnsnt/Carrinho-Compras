const fetchProducts = async (query) => {

    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}&limit=50`);
    const data = await response.json();
    
    return data.results;
}


export default fetchProducts;