import React, { useContext } from 'react';
import "./style.css";
import { Comment } from '../../components';
import { db, storage } from '../../firebase';
import CommentInput from '../../components/comment-input';
import { UserContext } from '../../context/user';


export default function Post({
    profileUrl, 
    username, 
    id, 
    photoURL, 
    caption, 
    comments
}) {

    const [user, setUser] = useContext(UserContext).user;

    const deletePost = () => {
        const imageRef = storage.refFromURL(photoURL);

        imageRef
            .delete()
            .then(function () {
                console.log('Your post has been deleted');
            })
            .catch(function (error) {
                console.log(`Error ${error}`);
            });

        db.collection("posts")
            .doc(id)
            .delete()
            .then(function () {
                console.log('Your post has been deleted');
            })
            .catch(function (error) {
                console.log(`Error ${error}`);
            });


    };
    
    
    return (
        <div className="post">
                
            <div className="postHeader">

                <div className="postHeaderLeft"> 
                    <img className="postProfilePic" alt="userProfilePic" src={profileUrl} />
                    <p style={{ marginLeft: "8px" }}>
                        {username}
                    </p>
                </div>
                
                <button className="postDelete" onClick={deletePost}>
                    Delete
                </button>
                
            </div>
            <div className="postCenter">
                <img className="postPhotoUrl" alt="postedPhoto" src={photoURL} />
            </div>

            <div>
                <p>
                    <span style={{ fontWeight: "500", marginRight: "4px" }}>
                        {username}
                    </span>
                    {caption}
                </p>
            </div>

            {comments ? (
                comments.map((comment) => (
                <Comment username={comment.username} caption={comment.comment} />  
                ))
            ) : (
                <div></div>
            )}

            {user ? <CommentInput comments={comments} id={id}/> : <div></div>}
            

        </div>
    );
}

