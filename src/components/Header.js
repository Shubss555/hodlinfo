import React, { useState } from 'react';
import logo from '../images/HODLINFO_logo.png';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Header = () => {
    const [sec,setsec]=useState(60);
    let url = "https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn";
    const percentage = {sec};
    setInterval(()=>{
        if(sec>0){
            setsec(sec-1);
        }
    }, 1000);

    return (
        <>
            <div className="row py-3">
                <div className="logo col-lg-4 col-md-4 col-12">
                   <a href="https://hodlinfo.com/"> <img src={logo} alt="Hodlinfo" /></a>
                  <p> Powered By<a href="https://www.finstreet.in/" className="logo_a"><span className="logo_span">Finstreet</span></a></p>
                </div>
                <div className="col-lg-4 col-md-4 col-12 d-flex mx-auto inr">
                    <div className="dropdown mx-2">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            INR
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">INR</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            BTC
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">BTC</a></li>
                            <li><a className="dropdown-item" href="#">ETH</a></li>
                            <li><a className="dropdown-item" href="#">USDT</a></li>
                            <li><a className="dropdown-item" href="#">XRP</a></li>
                            <li><a className="dropdown-item" href="#">TRX</a></li>
                            <li><a className="dropdown-item" href="#">DASH</a></li>
                            <li><a className="dropdown-item" href="#">ZEC</a></li>
                            <li><a className="dropdown-item" href="#">XEM</a></li>
                            <li><a className="dropdown-item" href="#">IOST</a></li>
                            <li><a className="dropdown-item" href="#">WIN</a></li>
                            <li><a className="dropdown-item" href="#">VTT</a></li>
                            <li><a className="dropdown-item" href="#">WRX</a></li>
                        </ul>
                    </div>
                    <div className="dropdown mx-2">
                        <button className="btn btn-secondary" type="button" id="dropdownMenuButton1" href={url}>
                            Buy BTC
                        </button>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12 d-flex telegram">
                    <div style={{ width: 35, height: 35, textSize: '16px'}}>
                        <CircularProgressbar value={sec}  maxValue={60} text={sec} />
                    </div>
                   <a href="https://hodlinfo.com/connect/telegram"> <button className="btn_tele" type="submit"><i className="fab fa-telegram-plane"></i> CONNECT TELEGRAM</button></a>
                </div>
            </div>
        </>
    )
}
export default Header;