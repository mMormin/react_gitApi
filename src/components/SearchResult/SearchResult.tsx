import { Grid } from 'semantic-ui-react';
import OneCard from '../OneCard/OneCard';
import './SearchResult.scss';

type Repo = {
  id: number;
  name: string;
  full_name: string;
};

type SearchResultProps = {
  total_count: number;
  repo: Repo[];
};

function SearchResult({ repo, total_count }: SearchResultProps) {
  return (
    <div className="container">
      <div className="result container__wrapper">
        <p className="result__number">
          La recherche a donné {total_count} résultats {repo.length}
        </p>

        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column>
              <OneCard />
            </Grid.Column>
            <Grid.Column>
              <OneCard />
            </Grid.Column>
            <Grid.Column>
              <OneCard />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <OneCard />
            </Grid.Column>
            <Grid.Column>
              <OneCard />
            </Grid.Column>
            <Grid.Column>
              <OneCard />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <OneCard />
            </Grid.Column>
            <Grid.Column>
              <OneCard />
            </Grid.Column>
            <Grid.Column>
              <OneCard />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <OneCard />
            </Grid.Column>
            <Grid.Column>
              <OneCard />
            </Grid.Column>
            <Grid.Column>
              <OneCard />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}

export default SearchResult;
