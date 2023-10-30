import './Header.scss';
import { Icon } from 'semantic-ui-react';

function Header() {
  return (
    <header>
      <Icon name="github" size="huge" />
      <h1>
        <span>GitHub</span> <span>RepoViewer</span>
      </h1>
    </header>
  );
}

export default Header;
