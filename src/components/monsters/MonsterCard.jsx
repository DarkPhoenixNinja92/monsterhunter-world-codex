import { Component } from "react";
import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

export default class MonsterCard extends Component {
  render() {
    return (
        <div className="col-md-4 col-sm-6 mb-5">
        <Card
  style={{
    width: '95%'
  }}
><img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
    <CardHeader>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
  </CardHeader>
  <CardBody>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>
</div>
    )
  }
}
