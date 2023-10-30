import './Header.scss';
import { Icon } from 'semantic-ui-react';

function Header() {
  return (
    <header>
      <Icon name="github" size="huge" />
      <h1>
        <span>G</span>it<span>H</span>ub <span>R</span>epo<span>V</span>iewer
      </h1>
    </header>
  );
}

export default Header;
