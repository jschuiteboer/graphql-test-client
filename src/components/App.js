import React, { Component } from 'react';
import BookFilter from "./BookFilter";

class App extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark mb-5">
                <span className="navbar-brand">GraphQL Client</span>
            </nav>
            <div className="container">
                <BookFilter />
            </div>
        </div>
    );
  }
}

export default App;
