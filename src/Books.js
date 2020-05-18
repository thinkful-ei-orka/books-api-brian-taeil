import React from 'react';
import './Books.css';
import Book from './Book';

function Books(props) {
  
  let books = props.state.books.map((book) => <Book book={book} key={book.id} />)

  return (
    <div>
      {books}
    </div>
  );
}

export default Books;
