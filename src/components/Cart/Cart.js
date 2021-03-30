import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const course = cart[i];
        total = total + course.course_price;   
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Enrolled Course: {cart.length} </p>
            <p>Total: {total}</p>
        </div>
    );
};

export default Cart;