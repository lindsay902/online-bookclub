import React from 'react';
import './style.css';

class FeaturedBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        books: [
            {id: 1, title: 'Home Before Dark', author: 'Riley Sager', imageSrc:'https://images3.penguinrandomhouse.com/cover/9781524745172'},
            {id: 2, title: 'A Promised Land', author: 'Barack Obama', imageSrc:'https://images2.penguinrandomhouse.com/cover/9781524763169'},
            {id: 3, title: 'One Day in December', author: 'Josie Silver', imageSrc: 'https://images3.penguinrandomhouse.com/cover/9780525574682'},
        ]
    }
    }
    render() {
        
     //loop throught each item in st
        return (
            <div>
                <div className="books-display-background">
                    <h1 className="featuredBooks">Featured books</h1>

                    <div className="book-display">
                        {this.state.books.map(book => (
                            <div className="book">
                                <img
                                    src={book.imageSrc}
                                    alt={book.alt}
                                    className="book-cover-image"
                                />
                                <div className="bookText">
                                    <h3>{book.title}</h3>
                                    <h3>by {book.author}</h3>
                                    <br></br>

                                    <h6>Click here to join the discussion</h6>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        
        );
    

    }


}

export default FeaturedBooks;