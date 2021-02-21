import React from 'react';
import {Link } from "react-router-dom";

const ShowCase = () => {
    return (
        <div className="home">
            <div className="showcase-container">
                <div className="hero-text">
                    <h4>WELCOME TO</h4>
                    <h1>GetPaidNaija</h1>
                    <p>Get paid upto <span className="cost">₦290,000</span> with just <span className="cost">₦1,000</span></p>
                    <span className="button">
                    <Link to="/sign-up" style={{color: "#17a2b8", textDecoration: "none"}}>GET STARTED</Link>
                    </span>

                </div>
                
                <div className="cont">
                    <img src="https://www.getpaidnaija.com/static/media/Group%202.1e26d1ec.png" width="100" />
                </div>
                
            </div>

            <div className="mission-statement contained">
                    <div className="card">
                        <h5>MISSION</h5>
                        <p>To create financial and economic oppotunity for every Nigerian seeking financial freedom.</p>
                    </div>

                    <div className="card">
                        <h5>VISION</h5>
                        <p>Our Vision is to create a system that allows every Nigerian enjoy the benefit of working together and earning together.</p>
                    </div>

                    <div className="card">
                        <h5>CORE VALUES</h5>
                        <ul>
                            <li>Integrity</li>
                            <li>Respect</li>
                            <li>Service</li>
                            <li>Passion</li>
                            <li>Accountability</li>
                        </ul>
                    </div>
                </div>

                <div className="card-level mission-statement">
                        <div className="level-container">
                            <span className="level-header"><h3>Level 1</h3></span>
                            <h5>Pay ₦1,000</h5>
                            <p>Get ₦2,500</p>
                            <p>Withdraw or Upgrade</p>
                            <Link to="/sign-up" style={Levelbtn}>Get started</Link>
                        </div>

                        <div className="level-container">
                            <span className="level-header"><h3>Level 2</h3></span>
                            <h5>Pay ₦2,000</h5>
                            <p>Get ₦5,000</p>
                            <p>Withdraw or Upgrade</p>
                            <Link to="/sign-up" style={Levelbtn}>Get started</Link>
                        </div>

                        <div className="level-container">
                            <span className="level-header"><h3>Level 3</h3></span>
                            <h5>Pay ₦5,000</h5>
                            <p>Get ₦14,000</p>
                            <p>Withdraw or Upgrade</p>
                            <Link to="/sign-up" style={Levelbtn}>Get started</Link>
                        </div>

                        <div className="level-container">
                            <span className="level-header"><h3>Level 4</h3></span>
                            <h5>Pay ₦14,000</h5>
                            <p>Get ₦40,000</p>
                            <p>Withdraw or Upgrade</p>
                            <Link to="/sign-up" style={Levelbtn}>Get started</Link>
                        </div>

                        <div className="level-container">
                            <span className="level-header"><h3>Level 5</h3></span>
                            <h5>Pay ₦40,000</h5>
                            <p>Get ₦110,000</p>
                            <p>Withdraw or Upgrade</p>
                            <Link to="/sign-up" style={Levelbtn}>Get started</Link>
                        </div>

                        <div className="level-container">
                            <span className="level-header"><h3>Level 6</h3></span>
                            <h5>Pay ₦100,000</h5>
                            <p>Get ₦290,000</p>
                            <p>Withdraw or Upgrade</p>
                            <Link to="/sign-up" style={Levelbtn}>Get started</Link>
                        </div>
                    </div>

                    <div className="svgs">
                        <div className="howto">
                            <h4>HOW TO EARN</h4>
                        </div>
                        <div className="svggrid">
                            <div>
                                <div className="svgholder">
                                    <img src="https://www.getpaidnaija.com/static/media/Group 8.d91fe31f.svg" />
                                </div>
                                <h4 class="title-card">Register</h4>
                            </div>

                            <div>
                                <div className="svgholder">
                                    <img src=" https://www.getpaidnaija.com/static/media/debit-card%201.77f1ee6c.svg" />
                                </div>
                                <h4 class="title-card">Pay</h4>
                            </div>

                            <div>
                                <div className="svgholder">
                                    <img src="https://www.getpaidnaija.com/static/media/collaboration%201.bc0fa921.svg" />
                                </div>
                                <h4 class="title-card">Share link</h4>
                            </div>

                            <div>
                                <div className="svgholder">
                                    <img src="https://www.getpaidnaija.com/static/media/debit-card%202.810c0acd.svg" />
                                </div>
                                <h4 class="title-card">Recieve payment</h4>
                            </div>
                        </div>
                    </div>
        </div>
       
    )
}
const Levelbtn = {
    borderRadius: '3px', 
    backgroundColor: "#17a2b8", 
    padding: "5px 8px", 
    color: "#fff"
}

export default ShowCase
