import { ChangeEvent, useState } from 'react';
import { Form, Input } from 'semantic-ui-react';
import './SearchBar.scss';

type SearchBarProps = {
  onSubmitSearchForm: (textToSearch: string) => void;
};

function SearchBar({ onSubmitSearchForm }: SearchBarProps) {
  const [searchText, setSearchText] = useState('');

  const handleChangeSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearchText = event.target.value;

    setSearchText(newSearchText);
  };

  const handleSubmitSearchForm = () => {
    onSubmitSearchForm(searchText);
  };

  return (
    <div className="container">
      <div className="container__wrapper">
        <Form onSubmit={handleSubmitSearchForm}>
          <Form.Field>
            <Input
              name="search"
              icon="search"
              iconPosition="left"
              placeholder="Rechercher un repo"
              value={searchText}
              onChange={handleChangeSearchText}
            />
          </Form.Field>
        </Form>
      </div>
    </div>
  );
}

export default SearchBar;
