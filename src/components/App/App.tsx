import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import { Repo } from '../../@types/repo';
import reposData from '../../../data/repos';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';

function App() {
  const [inputQuery, setInputQuery] = useState('');
  const [reposCount, setReposCount] = useState(0);
  const [reposList, setReposList] = useState<Repo[]>([]);

  useEffect(() => {
    document.title = 'GitHub RepoViewer';

    if (inputQuery) {
      fetch(`https://api.github.com/search/repositories?q=${inputQuery}`)
        .then((response) => response.json())
        .then((data) => {
          setReposList(data.items);
          setReposCount(data.total_count);
        });
    } else {
      setReposCount(reposData.total_count);
      setReposList(reposData.items);
    }
  }, [inputQuery]);

  return (
    <div className="app">
      <Header />
      <SearchBar onSubmitSearch={setInputQuery} />
      <SearchResult repos={reposList} total_count={reposCount} />
    </div>
  );
}

export default App;
