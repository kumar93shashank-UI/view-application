import React, { Component } from 'react';
// import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import TableView from './tableView';
import './App.css';
import DetailedView from './detailedView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      search: ''
    };
  }
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact strict component={TableView} />
          <Route path="/user/:id" exact strict component={DetailedView} props_new={'Hello'} />
        </div>
      </Router>
    );
  }
}

export default App;
