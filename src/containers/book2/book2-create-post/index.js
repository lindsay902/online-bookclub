import React, { useContext, useState } from 'react';
import './style.css';
import { SignInBtn } from '../../../components';
import { UserContext } from '../../../context/user';
import makeId from '../../../helper/functions';

import firebase from 'firebase';
import { storage, db } from '../../../firebase';

export default function Book2CreatePost() {
    const [user, setUser] = useContext(UserContext).user;
    const [caption, setCaption] = useState("");

    //const [image, setImage] = useState(null);

    const [progress, setProgress] = useState(0);

    const handleUpload = () => {
        if(caption) {
            const captionName = makeId(10);
            const uploadTask = storage.ref(`captions/${captionName}`)
            .put(caption);

            uploadTask.on("state_changed", (snapshot) => {
                //progress function 1%, 2%...

                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);

                setProgress(progress);
            }, (error) => {
                console.log(error);
            }, () => {
                //get download url and post

                storage
                    .ref("captions")
                    .child(`${captionName}`)
                    .getDownloadURL()
                    .then(() => {
                        db.collection("book2posts").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            username: user.email.replace("@gmail.com", ""),
                            profileUrl: user.photoURL
                        });
                });

                    setCaption("");
                    setProgress(0);
                    //setImage(null);

                   // document.getElementById('image-preview').style.display = 'none'

            });
        }
    };

    return (
        <div className="createPost">
            {user ? (
                <div className="createPost_loggedIn">
                    <p>Create Post</p>
                    <div className="createPost_loggedInCenter">
                        <textarea className="createPost_textarea" 
                            rows="3" 
                            placeholder="Type your post here"
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}>
                        </textarea>


                    </div>
                    <div className="createPost_loggedInBottom"> 
                        
                        <button 
                            className="createPost_uploadBtn" 
                            onClick={handleUpload}
                            style={{ color: caption ? "#000" : "lightgrey" }} 
                        >
                            {`Upload ${progress !== 0 ? progress: ""}`}
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <SignInBtn />
                    <p style={{ marginLeft: "12px" }}>to post & comment</p>
                </div>
            )}
            
        </div>
    );
}

