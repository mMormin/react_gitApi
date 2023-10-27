import { FormEvent, ChangeEvent, useState } from 'react';
import { Form, Input } from 'semantic-ui-react';
import './SearchBar.scss';

type FormProps = {
  onSubmitSearch: (newValue: string) => void;
};

function SearchBar({ onSubmitSearch }: FormProps) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleSubmitSearchInput = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    onSubmitSearch(inputValue);
  };

  return (
    <div className="container">
      <div className="container__wrapper">
        <Form onSubmit={handleSubmitSearchInput}>
          <Form.Field>
            <Input
              icon="search"
              iconPosition="left"
              placeholder="Search..."
              value={inputValue}
              onChange={handleInputChange}
            />
          </Form.Field>
        </Form>
      </div>
    </div>
  );
}

export default SearchBar;
