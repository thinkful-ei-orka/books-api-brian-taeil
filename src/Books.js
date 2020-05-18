import React from 'react';
import './Books.css';
import Book from './Book';

function Books(props) {
  let books = [];

  props.state.books.map((book) => {
    let authors = '';
    book.authors.map((author, i) => {
      authors += author;
      if (i < book.authors.length) {
        authors += ', ';
      }
    });
    let html = `
      <div>
        <h2>${book.title}</h2>
        <div>
          <img src="${book.imageLinks.thumbnail}" alt="${book.title} thumbnail" />
          <div>
            Authors:
          </div>
        </div>
      </div>`;
  });
  console.log(props);

  return (
    <div>
      These are books.
      <Book />
      <Book />
    </div>
  );
}

export default Books;
