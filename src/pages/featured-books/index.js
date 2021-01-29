import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import './style.css';


    export default function CurrentBooks() {
        const [books, setBooks] = useState([])
        
        useEffect(() => {
            db.collection("currentbooks").onSnapshot(snapshot => {
                const books = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }))

                setBooks(books)
                console.log(books);
            })
        }, []);

        return (
            <div>
                <div className="books-display-background">
                    <h1 className="featuredBooks">Featured books</h1>

                    <div className="book-display">
                        {books.map(book => {
                            return (
                                <div key={book.id} className="book">
                                <img
                                    src={book.imageUrl}
                                    alt={book.alt}
                                    className="book-cover-image"
                                />
                                <div className="bookText">
                                    <h3>{book.title}</h3>
                                    <h3>by {book.author}</h3>
                                    <br></br>

                                <h6>Click <a href={book.href}>here</a> to join the discussion</h6>
                                </div>
                            </div>
                            )
                        }
                            
                        )}
                        
                    </div>
                </div>
            </div>
        );
    
    }
   // }


