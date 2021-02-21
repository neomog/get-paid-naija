import React from 'react';
import {Link} from "react-router-dom";

const Signup = () => {
    return (
        <div  className="signin-cont sign-up">
            <form className="input-field ">
                <label>Full Name:</label>
                <input type="text" placeholder="Enter name in full" />
                <br />

                <label>Phone Number:</label>
                <input type="text" placeholder="Enter phone number" />
                <br />

                <label>Password:</label>
                <input type="text" placeholder="Enter password" />
                <br />

                <label>Confirm Password:</label>
                <input type="text" placeholder="Confirm password" />
                <br />

                <label>Refferal ID:</label>
                <input type="text" placeholder="Enter referral ID (optional)" />
                <br />

                <div>
                    <button type="submit">Register</button>
                    <br />
                    <span>Already registered? <Link to="/login">Login now</Link> </span>
                </div>
                
            </form>
            <div>
                <img src="https://www.getpaidnaija.com/static/media/group1.1689ab91.png" />
            </div>
        </div>
    )
}

export default Signup
