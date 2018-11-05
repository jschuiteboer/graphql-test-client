import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import BookList from "./BookList";
import Query from "react-apollo/Query";

const QUERY = gql`
    query filterBooks($filter: BookFilterInput!) {
        books(filter: $filter) {
            id
            title
            series
            author {
                name
            }
        }
    }`;

class BookFilter extends Component {

    state = {};

    getVariables() {
        let filter = {};

        if(this.state.title) {
            filter.title = this.state.title;
        }

        if(this.state.authorName) {
            filter.authorName = this.state.authorName;
        }

        if(this.state.series) {
            filter.series = this.state.series;
        }

        if(this.state.sortProperty) {
            filter.sortProperty = this.state.sortProperty;
        }

        return { filter: filter };
    }

    render() {
        return (
            <div className="row mb-5">
                <div className="col-sm-4 ">
                    <div className="card">
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
                            <div className="form-group">
                                <label>Series</label>
                                <input type="text" className="form-control" onChange={e => this.setState({series: e.target.value})}/>
                            </div>
                            <div className="form-group">
                                <div className="d-flex justify-content-between">
                                    <label>Year</label>
                                    <span>2018</span>
                                </div>
                                <input type="range" className="form-control-range" min="1800" max="2018" value="2018" />
                            </div>
                            <div className="form-group">
                                <label>Sort Property</label>
                                <input type="text" className="form-control" onChange={e => this.setState({sortProperty: e.target.value})}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-8">
                    <Query query={QUERY} variables={this.getVariables()}>
                        {({ loading, error, data }) => {
                            if (loading) return <div>Fetching...</div>
                            if (error) {
                                console.log(error);
                                return <div>{ error.message }</div>
                            }

                            return (<BookList books={ data.books } />)
                        }}
                    </Query>
                </div>
            </div>
        );
    }
}

export default withApollo(BookFilter);