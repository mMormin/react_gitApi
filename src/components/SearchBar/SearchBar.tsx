import './SearchBar.scss';
import { Input } from 'semantic-ui-react';

function SearchBar() {
  return (
    <div className="container">
      <div className="container__wrapper">
        <Input icon="search" iconPosition="left" placeholder="Search..." />
      </div>
    </div>
  );
}

export default SearchBar;
