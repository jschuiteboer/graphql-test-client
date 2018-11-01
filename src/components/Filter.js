import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import Book from "./Book";

const BOOKS_BY_TITLE_QUERY = gql`
    query BooksByTitle($title: String!) {
        booksByTitle(title: $title) {
            title
            author {
                name
            }
        }
    }`;

class Filter extends Component {

    state = {
        books: [],
        filter: '',
    };

    render() {
        return (
            <div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" onChange={e => this.setState({ filter: e.target.value })} />

                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" onClick={() => this._executeSearch()}>Search</button>
                    </div>
                </div>

                {this.state.books.map((book, index) => (
                    <Book key={book.id} book={book} index={index} />
                ))}
            </div>
        );
    }

    _executeSearch = async () => {
        const { filter } = this.state;
        const result = await this.props.client.query({
            query: BOOKS_BY_TITLE_QUERY,
            variables: { filter },
        });
        const books = result.data.books;
        this.setState({ books });
    }
}

export default withApollo(Filter);