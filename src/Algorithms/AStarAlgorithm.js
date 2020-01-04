import React from "react";
import RemoveFromArray from "./RemoveFromArray";
import "./Node.css";

var cols = 10;
var rows = 10;

var grid = new Array(cols);

var openSet = [];
var closedSet = [];
var start;
var end;

function Spot(i, j) {
  this.x = i;
  this.y = j;
  this.f = 0;
  this.g = 0;
  this.h = 0;
  this.isStart = "False";
  this.isEnd = "False";

  var extraClassName = "";

  if (i === 0 && j === 0) {
    this.isStart = "node-start";
  }

  if (i === 9 && j === 9) {
    this.isEnd = "node-end";
  }

  if (this.isEnd === "node-end") {
    extraClassName = "node-end";
  }

  if (this.isStart === "node-start") {
    extraClassName = "node-start";
  }

  this.show = () => {
    return <div id="node-{i}-{j}" className={"node " + extraClassName}></div>;
  };
}

export default function AStarAlgorithm() {
  // makes a 2d array
  for (var i = 0; i < cols; i++) {
    grid[i] = new Array(rows);
  }

  //creating objects for each individual cell in my array's
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Spot(i, j);
    }
  }

  console.log(grid);

  start = grid[0][0];
  end = grid[cols - 1][rows - 1];

  openSet.push(start);

  if (openSet.length > 0) {
    var winner = 0;
    for (var i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[winner.f]) {
        winner = i;
      }
    }

    var current = openSet[winner];

    if (openSet[winner] === end) {
      console.log("DONE !");
    }

    RemoveFromArray(openSet, current);
    closedSet.push(current);
  } else {

  }

  return (
    <div>
      {grid.map((cols, key) => {
        return (
          <table key={key}>
            <tbody>
              <tr>
                {cols.map((Spot, key) => {
                  return (
                    <th className="grid" key={key}>
                      {Spot.show()}
                    </th>
                  );
                })}
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}
