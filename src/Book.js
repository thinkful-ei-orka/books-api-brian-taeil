import React from 'react';
import './Book.css';

function Book(props) {
  let authors = ''
  if (!props.book.authors){

  } else {
    authors = 'Authors: '
    props.book.authors.forEach((author, i) => {
      authors += author;
      if (i < props.book.authors.length) {
        authors += ', ';
      }
    });
  }

  let imgAlt = `${props.book.title} thumbnail`
  let priceTag = ''
  if (!props.book.listPrice){
    priceTag = 'Not for Sale'
  } else {
    priceTag = props.book.listPrice.amount
  }

 return (
    <div>
      <h2>{props.book.title}</h2>
      <div className='bookParagraphs'>
        <div>
          <img src={props.book.imageLinks.thumbnail} alt={imgAlt} />
        </div>
        <div className='bookParagrph'>
          <p>{authors}</p>
          <p>Price: {priceTag}</p>
          <p>{props.book.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Book;
