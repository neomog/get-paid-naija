import React from 'react'
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="signin-cont">
            <form className="input-field">
                <label for="email">E-mail</label>
                <input type="text" placeholder="Enter e-mail" />
                <br />

                <label for="password">Password</label>
                <input type="password" placeholder="Enter password" />

                <div>
                    <button type="submit">Login</button>
                    <br />
                    <span>Don't have an account yet? <Link to="/sign-up">Register now</Link> </span>
                </div>
            </form>

            <div>
                <img src="https://www.getpaidnaija.com/static/media/group1.1689ab91.png" />
            </div>
        </div>
    )
}

export default Login
