import { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
        <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand col-sm-3 col-md-2 align-items-center">Monster Hunter: World - Big Book of Monsters</a>
        </nav>
    </div>
    );
  }
}