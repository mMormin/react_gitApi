import { Grid, Card, Image } from 'semantic-ui-react';
// import OneCard from '../OneCard/OneCard';
import { Repo } from '../../@types/repo';
import './SearchResult.scss';

type SearchResultProps = {
  total_count: number;
  repos: Repo[];
};

function SearchResult({ repos, total_count }: SearchResultProps) {
  const reposGroups = [];
  for (let i = 0; i < repos.length; i += 3) {
    reposGroups.push(repos.slice(i, i + 3));
  }

  return (
    <div className="container">
      <div className="result container__wrapper">
        <p className="result__number">
          La recherche a donné {total_count} résultats
        </p>
        <Grid columns={3}>
          {reposGroups.map((reposGroup, index) => (
            <Grid.Row key={index}>
              {reposGroup.map((repo) => (
                <Grid.Column key={repo.id}>
                  <Card>
                    <Image src={repo.owner.avatar_url} wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>{repo.name}</Card.Header>
                      <Card.Meta>{repo.owner.login}</Card.Meta>
                      <Card.Description>{repo.description}</Card.Description>
                    </Card.Content>
                  </Card>
                  {/* <OneCard /> */}
                </Grid.Column>
              ))}
            </Grid.Row>
          ))}
          {repos.length === 0 && <p>Aucun repo trouvé</p>}
        </Grid>
      </div>
    </div>
  );
}

export default SearchResult;
