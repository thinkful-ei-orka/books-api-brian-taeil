import React from 'react';
import './Search.css';

function Search(props) {

  function handleSearch(e) {
    e.preventDefault();

    let searchTerm = document.getElementById('search').value;
    let printType = document.getElementById('printType').value;
    let bookType = document.getElementById('bookType').value;

    props.runSearch(searchTerm, printType, bookType);
  };

  return (
    <form id="searchForm" onSubmit={handleSearch}>
      <div>
        <label htmlFor="search">Search:</label>
        <input type="text" id="search" name="search" placeholder="Enter book title"></input>
        <button type="submit">Search</button>
      </div>
      <div>
        <label htmlFor="printType">Print Type:</label>
        <select id="printType" name="printType" onChange={handleSearch}>
          <option value="all">all</option>
          <option value="books">books</option>
          <option value="magazines">magazines</option>
        </select>
        <label htmlFor="bookType">Book Type:</label>
        <select id="bookType" name="bookType" onChange={handleSearch}>
          <option value="">no filter</option>
          <option value="ebooks">ebooks</option>
          <option value="free-ebooks">free-ebooks</option>
          <option value="full">full</option>
          <option value="paid-ebooks">paid-ebooks</option>
          <option value="partial">partial</option>
        </select>
      </div>
    </form>
  );
}

export default Search;
