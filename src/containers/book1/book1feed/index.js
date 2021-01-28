import React, { useState, useEffect } from 'react';
import { Book1Post } from '../../index';
import { db } from '../../../firebase';
import './style.css';

export default function Feed(props) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("book1posts").onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({ 
                id: doc.id, post: doc.data()
            })));
        });
    }, [])

    return (
        <div className="feed">
            {posts.map(({id, post}) => {
                return <Book1Post
                key={id}
                id={id}
                profileUrl={post.profileUrl}
                username={post.username}
                caption={post.caption}
                comments={post.comments}
                />
            })}
        </div>
    );
}

