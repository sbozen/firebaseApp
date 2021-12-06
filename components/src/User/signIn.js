import React from 'react';
import { useState } from 'react';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";
import Home from './home';
import db from "../firebase";

function SignIn() {
    const [mail, setMail] = useState('');
    const [password, setPsw] = useState('');
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");


    const login = () => {
        try {
            const user = signInWithEmailAndPassword(auth, loginEmail, loginPassword);

        } catch (error) {
            console.log(error.message);
        };

        var a = db.collection('users');
        console.log(a);

    };

    const logout = () => {
        signOut(auth);
    };

    return (
        <div>
            <form>
                <h4> Giriş Yap </h4>
                aaa <input type="email" className="form-control" placeholder="Email..." onChange={(event) => {
                    setLoginEmail(event.target.value);
                }}
                />
                <input type="password" className="form-control"
                    placeholder="Password..." onChange={(event) => {
                        setLoginPassword(event.target.value);
                    }}
                />

                <button class="btn btn-outline-success" onClick={login}> Login</button>

                <button onClick={logout}> Sign Out </button>
            </form>
        </div>
    )
};

export default SignIn;