import React from 'react';
import "./style.css";
import { Comment } from '../../components';


export default function Post({
    profileUrl, 
    username, 
    id, 
    photoURL, 
    caption, 
    comments
}) {
    
    
    return (
        <div className="post">
                
            <div className="postHeader">

                <div className="postHeaderLeft"> 
                    <img className="postProfilePic" alt="userProfilePic" src={profileUrl} />
                    <p style={{ marginLeft: "8px" }}>
                        {username}
                    </p>
                </div>
                
                <button className="postDelete">
                    Delete
                </button>
                
            </div>
            <div className="postCenter">
                <img className="postPhotoUrl" alt="postedPhoto" src={photoURL} />
            </div>

            <div>
                <p>
                    <span style={{ fontWeight: "500", marginRight: "4px" }}
                    >
                        {username}
                    </span>
                    {caption}
                </p>
            </div>

            {comments ? (
                comments.map((comment) => (
                <Comment username={comment.username} caption={caption.username}/>  
                ))
            ) : (
                <div></div>
            )}

        </div>
    );
}

