import React from 'react';
import './style.css';
import { Navbar } from '../../containers/';
import { Book1Feed, Book1CreatePost } from '../../containers'

export default function Book1LoginPage() {
    return (
        <div className="loginPage">
            <Navbar />
            <Book1CreatePost />
            <Book1Feed />
        </div>
    );
}