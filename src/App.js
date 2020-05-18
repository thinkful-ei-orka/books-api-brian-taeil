import React from 'react';
import Header from './Header';
import Search from './Search';
import Books from './Books';

class App extends React.Component {
  state = { books: [] };

  runSearch = (search, printType, bookType) => {
    let filterString;

    if (!bookType) {
      filterString = '';
    } else {
      filterString = `&filter=${bookType}`;
    }

    let url = `https://www.googleapis.com/books/v1/volumes?q={${search}}${filterString}&printType=${printType}&maxResults=20`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.saveData(data);
      });
  }

  saveData = (data) => {
    console.log(data);
    let books = [];
    data.items.map((book) => {
      let stateBook = {
        id: book.id,
        title: book.volumeInfo.title,
        imageLinks: book.volumeInfo.imageLinks,
        authors: book.volumeInfo.authors,
        listPrice: book.saleInfo.listPrice,
        description: book.volumeInfo.description
      }
      books.push(stateBook)
    });
    this.setState({
      books: books
    });
  }

  render() {
    return (
      <main className='App'>
        <Header />
        <Search runSearch={this.runSearch} />
        <Books state={this.state} />
      </main>
    );
  }
}

export default App;
