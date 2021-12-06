import React from 'react';
import { useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";
import Home from './home';
import db from "../firebase";

function SignIn() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");


    const login = (e) => {
        e.preventDefault();
        try {
            const user = signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log(user)

        } catch (error) {
            console.log(error.message);
        };


    };

    const logout = () => {
        signOut(auth);
    };

    return (
        <div>
            <div className="card">
                <form>
                    <h4> Giriş Yap </h4>
                    <input type="email" className="form-control" placeholder="Email" onChange={(event) => {
                        setLoginEmail(event.target.value);
                    }}
                    />
                    <input type="password" className="form-control"
                        placeholder="Password" onChange={(event) => {
                            setLoginPassword(event.target.value);
                        }}
                    /><br />

                    <button className="btn btn-outline-dark " onClick={login} > Login</button>

                    <button className=" btn btn-outline-dark " style={{ float: 'right' }} onClick={logout}> Sign Out </button>
                </form>

            </div>
        </div >
    )
};

export default SignIn;