import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './header.css'

function header() {
    return (
        <div className="header">

            <Link to={'/'} className="nav-link" style={{ float: 'left' }}> Anasayfa</Link>
            <Link to={'/signIn'} className="nav-link"> Giriş Yap</Link>
            <Link to={'/signUp'} className="nav-link">Kaydol</Link>
        </div>
    )
}

export default header
