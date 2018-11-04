import React, { Component }  from 'react';
import Book from './Book';

class BookList extends Component {
    render() {
        return (
            <ul className="list-group">
                {this.props.books.map((book, index) => (
                    <li key={book.id} className="list-group-item list-group-item-action">
                        <Book book={book} index={index} />
                    </li>
                ))}
            </ul>
        )
    }
}

export default BookList;