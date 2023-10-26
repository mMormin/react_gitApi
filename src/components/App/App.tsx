import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';

function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <SearchResult />
    </div>
  );
}

export default App;
