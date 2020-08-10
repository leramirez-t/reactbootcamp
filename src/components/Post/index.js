import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  CardGroup,
  CardColumns,
  CardFooter,
  CardHeader,
} from "reactstrap";

function Post(props) {
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={props.img} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>
            <h5>{props.subtitle}</h5>
          </CardSubtitle>
          <CardText>{props.text}</CardText>
          <Button color={props.color}>{props.titlebutton}</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
}

export default Post;
