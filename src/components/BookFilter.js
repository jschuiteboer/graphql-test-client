import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import BookList from "./BookList";
import Query from "react-apollo/Query";

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

    state = {};

    getVariables() {
        let variables = {
            filter: {}
        };

        if(this.state.title) {
            variables.filter.title = this.state.title;
        }

        if(this.state.authorName) {
            variables.filter.authorName = this.state.authorName;
        }

        return variables;
    }

    render() {
        return (
            <div>
                <div className="card mb-4">
                    <div className="card-header">
                        Filter books
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" className="form-control" onChange={e => this.setState({title: e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label>Author</label>
                            <input type="text" className="form-control" onChange={e => this.setState({authorName: e.target.value})}/>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <Query query={QUERY} variables={this.getVariables()}>
                        {({ loading, error, data }) => {
                            if (loading) return <div>Fetching...</div>
                            if (error) {
                                console.log(error);
                                return <div>Error</div>
                            }

                            const books = data.filterBooks;

                            return (<BookList books={books} />)
                        }}
                    </Query>
                </div>
            </div>
        );
    }
}

export default withApollo(BookFilter);