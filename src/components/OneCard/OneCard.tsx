import { Card, Image } from 'semantic-ui-react';
import './OneCard.scss';

function OneCard() {
  return (
    <Card>
      <Image src="https://placehold.co/400x400/png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>react swag</Card.Header>
        <Card.Meta>react swag</Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville. Matthew is a musician
          living in Nashville. Matthew is a musician living in Nashville.
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default OneCard;
