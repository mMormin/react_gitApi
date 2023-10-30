import { Card, Image } from 'semantic-ui-react';
import { Repo } from '../../@types/repo';

type OneCardProps = {
  repo: Repo;
};

function OneCard({ repo }: OneCardProps) {
  return (
    <Card>
      <Image src={repo.owner.avatar_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{repo.name}</Card.Header>
        <Card.Meta>{repo.owner.login}</Card.Meta>
        <Card.Description>{repo.description}</Card.Description>
      </Card.Content>
    </Card>
  );
}

export default OneCard;
