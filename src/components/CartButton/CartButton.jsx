import React, { useContext } from 'react';
import './CartButton.css';

import AppContext from '../../context/AppContext';
import { BsFillCartFill } from 'react-icons/bs';

function CartButton() {

    const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

    return (
        <button type="button" className="cart_button" onClick={() => setIsCartVisible(!isCartVisible)}>
            <BsFillCartFill />
            {cartItems.length > 0 && <span className='cart-status'>{cartItems.length}</span>}
        </button>
    );
}

export default CartButton;