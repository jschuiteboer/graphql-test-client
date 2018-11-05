import React, { Component }  from 'react';

class Book extends Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-between">
                    <h5 className="mb-1">{this.props.book.title}</h5>
                    <span>{this.props.book.author.name}</span>
                </div>
                <span>{this.props.book.series}</span>
            </div>
        )
    }
}

export default Book;