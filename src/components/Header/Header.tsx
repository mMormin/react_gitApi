import './Header.scss';
import { Icon } from 'semantic-ui-react';

function Header() {
  return (
    <header>
      <Icon name="github" size="huge" />
      <h1>GitHub RepoViewer</h1>
    </header>
  );
}

export default Header;
