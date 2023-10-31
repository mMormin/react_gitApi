import { Segment } from 'semantic-ui-react';
import './TotalRepos.scss';

type TotalReposProps = {
  totalRepos: number;
};

function TotalRepos({ totalRepos }: TotalReposProps) {
  return (
    <Segment>
      <p>
        <span>{totalRepos}</span> repositories trouvés :
      </p>
    </Segment>
  );
}

export default TotalRepos;
