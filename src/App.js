import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/header'
import Article from './Article/article'
import Ad from './Ad/ad'
import OtherArticles from './OtherArticles/otherArticles'
import Footer from './Footer/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main className="expanded row">
          <Article />
          <Ad />
          <OtherArticles />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
