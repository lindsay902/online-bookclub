import React, { useState, useContext } from 'react';
import './style.css';
import { UserContext } from "../../context/user";
import { db } from '../../firebase';

export default function Book2CommentInput({ comments, id }) {

    const [user, setUser] = useContext(UserContext).user;
    const [comment, setComment] = useState("");
    const [commentArray, setCommentArray] = useState(comments ? comments : []);

    const addComment = () => {
        if (comment !== "") {
        
            commentArray.push({
                comment: comment,
                username: user.email.replace("@gmail.com", "").toLowerCase(),
            });

            db.collection("book2posts")
                .doc(id)
                .update({
                comments: commentArray,
            })
            .then(function () {
                setComment("");
                console.log("Comment added!");
            })
            .catch(function (error) {
                console.log(`Error ${error}`);
            });
        }

    };

    return (
        <div className="commentInput">

            <textarea 
                className="commentInputTextarea" 
                rows="1" 
                placeholder="Post a comment..." 
                value={comment}
                onChange={(e) => setComment(e.target.value)}>
            </textarea>

            <button 
                onClick={addComment}
                className="commentInputBtn">
                    Post
            </button>
            
        </div>
    );
}

