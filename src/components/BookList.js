import React, { Component }  from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Book from './Book';
import Filter from "./Filter";

const BOOKS_QUERY = gql`{
    books {
        title
        author {
            name
        }
    }
}`;

class BookList extends Component {
    render() {
        return (
            <Query query={BOOKS_QUERY}>
                {({ loading, error, data }) => {
                    if(loading) return <div>Fetching</div>;
                    if(error) {
                        console.log(error);
                        return <div>Error</div>;
                    }

                    const booksToRender = data.books;

                    return (
                        <div>
                            <Filter />

                            <ul class="list-group">
                                {booksToRender.map(book =>
                                    <li class="list-group-item list-group-item-action">
                                        <Book key={book.id} book={book} />
                                    </li>
                                )}
                            </ul>
                        </div>
                    )
                }}
            </Query>
        )
    }
}

export default BookList;