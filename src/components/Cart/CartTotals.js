import React from 'react';
import {Link} from 'react-router-dom';
import { ThemeConsumer } from '../context/ThemeContexts';

export default function CartTotals({value}) {
    const {cartSubTotal, cartTax, cartTotal,clearCart} = value;
    return (
        <ThemeConsumer>
        {({ theme }) => (
       <div className="container">
           <div className="row">
               <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/">
                        <button
                            className="btn btn-outline-danger text-uppercase mb-3 px-5"
                            type="button"
                            onClick={() => {
                                clearCart();
                            }}>
                            clear cart
                        </button>
                    </Link>
                    <h5>
                        <span className={theme ? "text-title text-light" : "text-title"}>subtotal :</span>
                        <strong className={theme ? " text-light" : "text-black"}>{cartSubTotal}</strong>
                    </h5>
                    <h5>
                        <span className={theme ? "text-title text-light" : "text-title"}>subtotal :</span>
                        <strong className={theme ? " text-light" : "text-black"}>{cartTax}</strong>
                    </h5>
                    <h5>
                        <span className={theme ? "text-title text-light" : "text-title"}>subtotal :</span>
                        <strong className={theme ? " text-light" : "text-black"}>{cartTotal}</strong>
                    </h5>
               </div>
           </div>
       </div>
         )}
         </ThemeConsumer>

    )
}
