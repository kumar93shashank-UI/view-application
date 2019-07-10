import React, { Component } from 'react';
import TableView from './tableView';
class DetailedView extends Component {
    render() {
        return (<div>
            <TableView id={this.props.match.params.id} />

        </div>);
    }
}
export default DetailedView;