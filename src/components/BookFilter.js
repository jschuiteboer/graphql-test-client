import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import BookList from "./BookList";

const QUERY = gql`
    query filterBooks($filter: BookFilterInput!) {
        filterBooks(filter: $filter) {
            id
            title
            author {
                name
            }
        }
    }`;

class BookFilter extends Component {

    state = {
        books: [],
        filter: {},
    };

    render() {
        return (
            <div>
                <div className="form-group">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="title" onChange={e => this.setState({filter: {title: e.target.value}})}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="author" onChange={e => this.setState({filter: {authorName: e.target.value}})}/>
                    </div>
                    <button className="btn btn-secondary" onClick={() => this._executeSearch()}>Search</button>
                </div>

                <BookList books={this.state.books} />
            </div>
        );
    }

    componentDidMount() {
        this._executeSearch();
    }

    _executeSearch = async () => {
        console.log(this.state);

        const result = await this.props.client.query({
            query: QUERY,
            variables: { filter: this.state.filter },
        });

        console.log("result:", result);

        this.setState({ books: result.data.filterBooks });
    }
}

export default withApollo(BookFilter);