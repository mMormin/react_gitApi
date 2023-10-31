import { useState } from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import reposData from '../../../data/repos';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';

function App() {
  const [reposCount, setReposCount] = useState(reposData.total_count);
  const [reposList, setReposList] = useState(reposData.items);

  const handleSubmitSearchForm = (textToSearch: string) => {
    if (textToSearch !== '') {
      fetch(`https://api.github.com/search/repositories?q=${textToSearch}`)
        .then((response) => response.json())
        .then((data) => {
          setReposList(data.items);
          setReposCount(data.total_count);
        });
    } else {
      setReposList([]);
      setReposCount(0);
    }
  };

  return (
    <div className="app">
      <Header />
      <SearchBar onSubmitSearchForm={handleSubmitSearchForm} />
      <SearchResult repos={reposList} total_count={reposCount} />
    </div>
  );
}

export default App;
