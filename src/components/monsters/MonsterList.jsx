import axios from "axios";
import { Component } from "react";
import { CardGroup } from "reactstrap";
import spinner from './spinner.gif';
import MonsterCard from '../monsters/monsterCard';

export default class MonsterList extends Component {
    state = {
        url: 'https://mhw-db.com/monsters',
        monster: null
    };

    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({ monster: res.data });
    }

  render() {
    return (
        <CardGroup className="monsterList">
            {this.state.monster ? (<div className="row">
            {this.state.monster.map(monster => (
            <MonsterCard key={monster.name} name={monster.name} type={monster.type} species={monster.species} description={monster.description} />
        ))}
            </div>) : <img src={spinner} style={{width:'5em', height: '5em'}} className="card-img-top rounded mx-auto d-block mt-2" />}
        </CardGroup>
    )
  }
}