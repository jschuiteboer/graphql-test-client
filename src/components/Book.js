import React, { Component }  from 'react';

class Book extends Component {
    render() {
        return (
            <div>
                <p className="mb-1">{this.props.book.title}</p>
                <small>by {this.props.book.author.name}</small>
            </div>
        )
    }
}

export default Book;