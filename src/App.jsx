import { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Dashboard />
      </div>
    )
  }
}
