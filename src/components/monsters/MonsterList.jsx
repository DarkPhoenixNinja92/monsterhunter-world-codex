import { Component } from "react";
import MonsterCard from '../monsters/monsterCard';
import { CardGroup } from "reactstrap";

export default class MonsterList extends Component {
    state = {
        url: 'https://mhw-db.com/monsters'
    };
  render() {
    return (
        <CardGroup className="monsterList">
            <div className="row">
                <MonsterCard />
            <MonsterCard />
            <MonsterCard />
            <MonsterCard />
            <MonsterCard />
            <MonsterCard />
            <MonsterCard />
            <MonsterCard />
            <MonsterCard />
            <MonsterCard />
            <MonsterCard />
            <MonsterCard />
            <MonsterCard />
            <MonsterCard />
            <MonsterCard />
            <MonsterCard />
            </div>
            
        </CardGroup>
    )
  }
}
