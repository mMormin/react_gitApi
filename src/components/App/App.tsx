import { useState } from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import reposData from '../../../data/repos';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';

function App() {
  const [inputQuery, setInputQuery] = useState();

  console.log(inputQuery);

  return (
    <div className="app">
      <Header />
      <SearchBar onSubmitSearch={setInputQuery} />
      <SearchResult
        repo={reposData.items}
        total_count={reposData.total_count}
      />
    </div>
  );
}

export default App;
