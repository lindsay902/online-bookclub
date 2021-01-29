import React, { useContext } from 'react';
import "./style.css";
import { Comment } from '../../../components';
import { db, storage } from '../../../firebase';
import { Book2CommentInput } from '../../../components';
import { UserContext } from '../../../context/user';


export default function Book2Post({
    profileUrl, 
    username, 
    id, 
    caption, 
    comments
}) {

    const [user, setUser] = useContext(UserContext).user;

    const deletePost = () => {
        const idRef = storage.ref(id);

        idRef
            .delete()
            .then(function () {
                console.log('Your post has been deleted');
            })
            .catch(function (error) {
                console.log(`Error ${error}`);
            });

        db.collection("book2posts")
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
                
                {user ? 
                <button className="postDelete" onClick={deletePost}>
                    Delete
                </button>
                : <div></div>}
                
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

            {user ? <Book2CommentInput comments={comments} id={id}/> : <div></div>}
            

        </div>
    );
}

