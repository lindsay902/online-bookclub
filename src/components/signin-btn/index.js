import React, { useContext } from 'react';
import { signInWithGoogle } from '../../services/auth';
import { UserContext } from '../../context/user';
import "./style.css";

export default function SignInBtn() {
    const [, setUser] = useContext(UserContext).user;

    const signInBtnClick = async () => {
        let userBySignIn = await signInWithGoogle()
        if (userBySignIn) setUser(userBySignIn)
    };

    return (
        <div className="signInBtn" onClick={signInBtnClick}>
            <p>Sign in with Google</p>
        </div>
    );
}

