import { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';
import axios from 'axios';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import ReposResult from '../ReposResult/ReposResult';
import reposData from '../../../data/repos';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';

function App() {
  const nbPerPage = 12;
  const [reposCount, setReposCount] = useState(reposData.total_count);
  const [reposList, setReposList] = useState(reposData.items);
  const [searchText, setSearchText] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const handleSubmitSearchForm = (textToSearch: string) => {
    setSearchText(textToSearch);
    setPageNumber(1);
  };

  useEffect(() => {
    if (searchText !== '') {
      axios
        .get(`https://api.github.com/search/repositories`, {
          params: {
            q: searchText,
            sort: 'stars',
            order: 'desc',
            page: pageNumber,
            per_page: nbPerPage,
          },
        })
        .then((response) => {
          if (pageNumber === 1) {
            setReposList(response.data.items);
            setReposCount(response.data.total_count);
          } else {
            setReposList((oldRepos) => [...oldRepos, ...response.data.items]);
          }
        });
    } else {
      setReposList([]);
      setReposCount(0);
    }
  }, [searchText, pageNumber]);

  const lastPage = Math.ceil(reposCount / nbPerPage);

  return (
    <div className="app">
      <Header />
      <SearchBar onSubmitSearchForm={handleSubmitSearchForm} />

      {reposCount > 0 && (
        <ReposResult repos={reposList} totalRepos={reposCount} />
      )}

      {lastPage > pageNumber && (
        <Button onClick={() => setPageNumber(pageNumber + 1)}>
          Charger plus (page {pageNumber} / {lastPage})
        </Button>
      )}
    </div>
  );
}

export default App;
