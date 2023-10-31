import { Card, Segment } from 'semantic-ui-react';
import { Repo } from '../../@types/repo';
import OneCard from '../OneCard/OneCard';
import TotalRepos from '../TotalRepos/TotalRepos';
import './ReposResult.scss';

type ReposResultProps = {
  totalRepos: number;
  repos: Repo[];
};

function ReposResult({ repos, totalRepos }: ReposResultProps) {
  return (
    <div className="container">
      <div className="result container__wrapper">
        <TotalRepos totalRepos={totalRepos} />

        <Segment className="result__repos">
          <Card.Group itemsPerRow={3}>
            {repos.map((repo) => (
              <OneCard key={repo.id} repo={repo} />
            ))}
          </Card.Group>
        </Segment>
      </div>
    </div>
  );
}

export default ReposResult;
