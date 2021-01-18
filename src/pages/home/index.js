import React from 'react';
import './style.css';
import { Navbar, CreatePost, Feed } from '../../containers/';

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <CreatePost />
            <Feed />
        </div>
    );
}

