import React from 'react';
import './style.css';
import { Navbar, CreatePost, Feed } from '../../containers/';

export default function LoginPage() {
    return (
        <div className="loginPage">
            <Navbar />
            <CreatePost />
            <Feed />
        </div>
    );
}