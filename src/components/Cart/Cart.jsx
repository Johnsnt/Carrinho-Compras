import React, { useState } from 'react';
import { useContext } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import { formatCurrency } from '../../utils/formatCurrency';


export default function Cart() {

    const { cartItems, isCartVisible } = useContext(AppContext);
    //Exibe o preço do carrinho.
    const totalPrice = cartItems.reduce((acumulator, item) => {
        return item.price + acumulator 
    }, 0);

    return (
        <section className={`cart ${isCartVisible ? 'cart-active' : ''}`}>
            <div className='cart-items'>
                {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}
            </div>
            <div className='cart-resume'>
            {formatCurrency(totalPrice, 'BRL')}    

            </div>
        </section>
    );
}
