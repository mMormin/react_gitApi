import { Grid } from 'semantic-ui-react';
import OneCard from '../OneCard/OneCard';
import './SearchResult.scss';

function SearchResult() {
  return (
    <div className="container">
      <div className="result container__wrapper">
        <p className="result__number">La recherche a donné 1212154 résultats</p>

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
