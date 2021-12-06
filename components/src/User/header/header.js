import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './header.css'

function header() {
    return (
        <div className="header">

            <Link to={'/'} className="nav-link"> home</Link>
            <Link to={'/signIn'} className="nav-link"> in</Link>
            <Link to={'/signUp'} className="nav-link">up</Link>
        </div>
    )
}

export default header
