import React, { Component } from 'react';
import ShowReactTable from "./components/ReactTable/ReactTable";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      {/* <h1>Hello</h1> */}
      <ShowReactTable/>
      </div>
    );
  }
}

export default App;
