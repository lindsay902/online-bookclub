import React from 'react';
import './style.css';
import { Navbar } from '../../containers/';
import FeaturedBooks from '../featured-books';
import { Contact } from '..';

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <div className="main">
                    <img className="heartImage" alt="heart" src="https://media-public.canva.com/MADQCfZFlF0/1/screen.svg" />
                    <div className="logo">
                        Books & Babes
                    </div>

            </div>
            <div className="featuredBooks">

                <FeaturedBooks /> 
            </div>
            <div className="footer">
                <Contact />
            </div>

        </div>
    );
}

