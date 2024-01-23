import React from 'react';
import { ThemeConsumer } from '../context/ThemeContexts';

export default function CartColumns() {
    return (
        <ThemeConsumer>
        {({ theme }) => (
        <div className="container-fluid text-center d-none d-lg-block">
          <div className="row">
               <div className="col-10 mx-auto col-lg-2">
                   <p className={theme ? "text-uppercase text-light" : "text-uppercase"}>products</p>  
               </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className={theme ? "text-uppercase text-light" : "text-uppercase"}>name of product</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className={theme ? "text-uppercase text-light" : "text-uppercase"}>price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className={theme ? "text-uppercase text-light" : "text-uppercase"}>quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className={theme ? "text-uppercase text-light" : "text-uppercase"}>remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className={theme ? "text-uppercase text-light" : "text-uppercase"}>total</p>
                </div>
          </div>   
        </div>
          )}
          </ThemeConsumer>
    )
}
