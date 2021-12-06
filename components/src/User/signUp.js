import React from "react";
import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import db, { auth } from "../firebase";
import { Link } from "react-router-dom";
import SignIn from "./signIn";


const SignUp = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPsw] = useState('');
    const [passwordRetry, setPswRetry] = useState('');

    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const add = (e) => {
        e.preventDefault();

        try {
            const user = createUserWithEmailAndPassword(auth, mail, password);
            db.collection("users").add({
                name: name,
                surname: surname,
                mail: mail,
                phone: phone,
            })
        } catch (error) {
            console.log(error.message);
        }
    };
    return (

        <div className="container">
            <form>
                <h4>Kayıt Ol!</h4>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" value={surname} onChange={(e) => setSurname(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={mail} onChange={(e) => setMail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Tel</label>
                    <input type="text" className="form-control" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPsw(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Retry password" value={passwordRetry} onChange={(e) => setPswRetry(e.target.value)} />
                </div>

                <button type="submit" onClick={add} className="btn btn-dark btn-lg btn-block" >Sign Up!</button>

                <p className="forgot-password text-right">
                    Already registered   log in?
                </p>


            </form>



        </div>
    );
};


export default SignUp;