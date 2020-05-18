import React from 'react';
import './Books.css';
import Book from './Book';

function Books(props) {
  let books = [];

  props.state.books.map((book) => {
    
    books.push (<Book book={book} key={book.id} />)
    
  });
  console.log(books);

  return (
    <div>
      {books}
    </div>
  );
}

export default Books;
