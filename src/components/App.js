import React, { Component } from 'react';
import BookList from "./BookList";

class App extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark mb-5">
                <a className="navbar-brand" href="#">GraphQL Client</a>
            </nav>
            <div class="container">
                <BookList />
            </div>
        </div>
    );
  }
}

export default App;
