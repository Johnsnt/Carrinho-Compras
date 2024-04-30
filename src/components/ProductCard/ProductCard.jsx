import React, { useContext } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { formatCurrency } from '../../utils/formatCurrency';
import './ProductCard.css';
import AppContext from '../../context/AppContext';

function ProductCard({ data }) {

    //Chaves com o mesmo nome do objeto retornado na API
    const {permalink, title, thumbnail, price } = data;
    const { cartItems, setCartItems } = useContext(AppContext);

    const handleAddCart = () => {
        setCartItems([...cartItems, data]);
    };

    return (
        <section className='product-card'>
            <a className='link' href={permalink} target='_blank'>
            <img
                src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                alt="produto"
                className="card__image" />

            <div className='card__infos'>
                <h2 className="card__title">{title}</h2>
                
            </div>
            <div className='card__price_box'>
            <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
            </div>
            </a>

            <button
                type="button"
                className="button__add-cart"
                onClick={handleAddCart}
            >
                <BsFillCartPlusFill />
            </button>
        </section>
    );
}

export default ProductCard;