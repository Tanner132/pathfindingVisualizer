import React, { Component } from "react";
import "./MainPage.css";
import AStarAlgorithm from "./../Algorithms/AStarAlgorithm";

export default class MainPage extends Component {
  render() {
    return <div>{AStarAlgorithm()}</div>;
  }
}
