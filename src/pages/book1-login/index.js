import React, { useEffect, useState } from 'react';
import './style.css';
import { Navbar } from '../../containers/';
import { Book1Feed, Book1CreatePost } from '../../containers'
import { db } from '../../firebase';

export default function Book1LoginPage() {
    const [bookDetails, setBookDetails] = useState([])
        

        useEffect(() => {
            db.collection("currentbooks").where("href", "==", "./book1")
            .onSnapshot(snapshot => {
                const bookDetails = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }))

                setBookDetails(bookDetails)
            })
        }, []);



    return (
        <div className="loginPage">
            <Navbar />
                <div className="book-display login">
                    {bookDetails.map(bookDetail => {
                        return (
                            <div key={bookDetail.id} className="book feed">
                            <img
                                src={bookDetail.imageUrl}
                                alt={bookDetail.alt}
                                className="book-cover-image"
                            />
                            <div className="bookText">
                                <h3>{bookDetail.title}</h3>
                                <h3>by {bookDetail.author}</h3>
                                <br></br>

                            <h6>Join the discussion below!</h6>
                            </div>
                        </div>
                        )
                    }
                        
                    )}
                    
                </div>
            <Book1CreatePost />
            <Book1Feed />
        </div>
    );
}