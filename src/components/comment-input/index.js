import React from 'react';
import './style.css';

export default function CommentInput() {
    return (
        <div className="commentInput">

            <textarea className="commentInputTextarea" rows="1">
            </textarea>

            <button className="commentInputBtn">Post</button>
            
        </div>
    );
}

