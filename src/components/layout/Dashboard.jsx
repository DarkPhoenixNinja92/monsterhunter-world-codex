import { Component } from "react";
import MonsterList from "../monsters/monsterList";

export default class Dashboard extends Component {
  render() {
    return (
        <div className="row dash">
            <div className="col">
                <MonsterList/>
            </div>
        </div>
    )
  }
}
