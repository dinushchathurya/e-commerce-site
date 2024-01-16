import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import { ThemeConsumer } from './context/ThemeContexts';

export default class Details extends Component {
    render() {
        return (
            <ThemeConsumer>
            {({ theme }) => (
            <ProductConsumer>
                {value=>{
                   const {id, company, img, info, price, title, inCart} = value.detailProduct; 
                   return(
                       <div className={theme ? "container py-5 bg-slate-900" : "container py-5 "}>
                           {/*title*/}
                            <div className="row>">
                                <div className={theme? "col-10 mx-auto text-center text-slanted text-primary my-5" : "col-10 mx-auto text-center text-slanted text-blue my-5"}>
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/*end of title*/}
                            {/*product info*/}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                            {/*product text*/}
                                <div className={theme ? "col-10 mx-auto col-md-6 my-3 text-capitalize text-light" : "col-10 mx-auto col-md-6 my-3 text-capitalize"}>
                                    <h2>model:{title}</h2>
                                    <h4 className={theme ? "text-title text-uppercase text-white mt-3 mb-2" : "text-title text-uppercase text-muted mt-3 mb-2"}>
                                        made by: <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className={theme ? "text-primary" : "text-blue"}>
                                        <strong>
                                            Price : <span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <p className={theme ? "text-capitalize font-weight-bold mt-3 mb-0 text-info" : "text-capitalize font-weight-bold mt-3 mb-0"}>
                                            some info about product
                                    </p>
                                    <p className={theme ? "lead text-light" :"text-muted lead"}>
                                        {info}
                                    </p>
                                    {/*buttons*/}
                                    <div>
                                       <Link to="/">
                                           <ButtonContainer>
                                               back to products
                                           </ButtonContainer>
                                        </Link>
                                            <ButtonContainer cart disabled={inCart ? true : false}
                                                onClick={() => {
                                                    value.addToCart(id);
                                                    value.openModal(id);
                                                }}>
                                               {inCart ? "inCart" : "add to cart"}
                                            </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                       
                   ); 
                }}
            </ProductConsumer>
             )}
             </ThemeConsumer>
        )
    }
}
