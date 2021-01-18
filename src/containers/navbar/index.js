import React, { useContext } from 'react';
import './style.css';
import { SignInBtn } from '../../components';
import { UserContext } from '../../context/user';

export default function Navbar() {

    const [user, setUser] = useContext(UserContext).user

    return (
        <div className="navbar">
            <p>Books & Babes</p>

            {user ? (
                <img alt="userphoto" className="navbar_image" src={user.photoURL} />
                ) : (
                    <SignInBtn />
                )}
        </div>
    );
}

