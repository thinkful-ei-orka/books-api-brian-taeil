import React from 'react';
import './Search.css';

class Search extends React.Component {
  handleSearch(e) {
    e.preventDefault();
    console.log('searching');
  }

  render() {
    return (
      <form id="searchForm" onSubmit={this.handleSearch}>
        <div>
          <label htmlFor="search">Search:</label>
          <input type="text" id="search" name="search" placeholder="Enter book title"></input>
          <button type="submit">Search</button>
        </div>
        <div>
          <label htmlFor="printType">Print Type:</label>
          <select id="printType" name="printType" onChange={this.handleSearch}>
            <option value="all">all</option>
            <option value="books">books</option>
            <option value="magazines">magazines</option>
          </select>
          <label htmlFor="bookType">Book Type:</label>
          <select id="bookType" name="bookType" onChange={this.handleSearch}>
            <option>no filter</option>
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
}

export default Search;
