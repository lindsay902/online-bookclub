import React from 'react';
import './style.css';
import { Navbar, CreatePost } from '../../containers/';

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <CreatePost />
        </div>
    );
}

