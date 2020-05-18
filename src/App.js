import React from 'react';
import Header from './Header';
import Search from './Search';
import Filters from './Filters';
import Books from './Books';

function App() {
  return (
    <main className='App'>
      <Header />
      <Search />
      <Filters />
      <Books />
    </main>
  );
}

export default App;
