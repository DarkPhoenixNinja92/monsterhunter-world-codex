import { Component } from "react";
import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

export default class MonsterCard extends Component {
  state = {
    name: '',
    type: '',
    species: '',
    description: ''
  };

  componentDidMount() {
    const { name, type, species, description } = this.props;
    this.setState({name, type, species, description});
  }

  render() {
    return (
      <div className="col-md-4 col-sm-6 mb-5">
        <Card style={{width: '95%'}}>
          <CardHeader>
          <CardTitle tag="h5">
            {this.state.name}
          </CardTitle>
        </CardHeader>
        <CardBody>
          <div className="d-flex align-items-center justify-content-center">
          <CardSubtitle className="mb-2 text-muted text-capitalize p-4" tag="h6">{this.state.type}</CardSubtitle>
          <CardSubtitle className="mb-2 text-muted text-capitalize" tag="h6">{this.state.species}</CardSubtitle>
          </div>
          <CardText>{this.state.description}</CardText>
            <Button>See more details</Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}
