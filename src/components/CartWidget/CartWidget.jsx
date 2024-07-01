import React from "react";
import cart_widget from '../../assets/cart_widget.png'
import './CartWidget.css'

function CartWidget () {
    return(
        <div className="cart_widget"><img src={cart_widget} alt="cart_widget" />0</div>
    )
};

export default CartWidget;