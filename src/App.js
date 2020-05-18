import React from 'react';
import Header from './Header';
import Search from './Search';
import Books from './Books';

class App extends React.Component {

  runSearch() {
    console.log('running');
  }

  render() {
    return (
      <main className='App'>
        <Header />
        <Search />
        <Books />
      </main>
    );
  }
}

export default App;
