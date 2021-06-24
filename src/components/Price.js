import React from 'react';
import image from '../images/crypto.png';

const Price = () => {

    return (
        <>
            <div>
                <div className="row py-3">
                    <div className="col-lg-2 col-md-2 col-6 text-center price_list">
                        <h2>0.58%</h2>
                        <p>5 mins</p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-6 text-center price_list">
                    <h2>1.5%</h2>
                        <p>1 hour</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12 text-center price_rupee">
                    <h3 className="text-center price_heading">Best Price to Trade</h3>
                    <h2><i className="fas fa-rupee-sign"></i>26,15,435</h2>
                    <h3 className="text-center price_heading_avg">Average BTC/INR net price including commission</h3>
                    </div> 
                    <div className="col-lg-2 col-md-2 col-6 text-center price_list">
                    <h2>5.11%</h2>
                        <p>1 Day</p>
                    </div> 
                    <div className="col-lg-2 col-md-2 col-6 text-center price_list">
                    <h2>12.13%</h2>
                        <p>7 Days</p>
                    </div>

                </div>
                <div>
                   <a href="https://finstreet.in/courses"> <img src={image} alt="crypto"  style={{ width:'95%',margin:'0 auto',display:'table'}}/></a>
                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
}
export default Price;