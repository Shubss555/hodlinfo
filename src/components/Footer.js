import React from 'react';
import banner from '../images/FTX.png';

const Footer =()=>{
    return (
        <>
        <div>
        <a href="https://ftx.com/"><img src={banner} alt="crypto"  style={{ width:'100%'}}/></a>
        </div>
        <footer>
        <div className="footer">
           <p>Copywrite &copy; 2019</p>
           <p>HodlInfo.com</p>
           <p>Developed By <span> <a href="https://www.quadbtech.com/"> QuadBTech</a></span> </p>
           <p className="footer_support">Support</p>
        </div>
        </footer>
         <div className="foot_fixed text-center p-1">
         <button type="button" class="btn btn_foot" onClick={ ()=>{alert("install App")}}>Add hodlinfo to Home screen</button>
         </div>
       
        
         
        </>
    )
}
export default Footer;