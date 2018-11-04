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
    };

    render() {
        return (
            <div>
                <div className="form-group">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="title" onChange={e => this.setState({title: e.target.value})}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="author" onChange={e => this.setState({authorName: e.target.value})}/>
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
        console.log("state: ", this.state);

        let filter = {};

        if(this.state.title) {
            filter.title = this.state.title;
        }

        if(this.state.authorName) {
            filter.authorName = this.state.authorName;
        }

        const result = await this.props.client.query({
            query: QUERY,
            variables: {
                filter: filter,
            },
        });

        console.log("result:", result);

        this.setState({ books: result.data.filterBooks });
    }
}

export default withApollo(BookFilter);