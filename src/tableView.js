import React, { Component } from 'react';
import ReactTable from 'react-table';
import './App.css';
import { withRouter } from 'react-router-dom';

class TableView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
            search: '', value: false
        };
        this.detail_data = {};
    }
    componentDidMount() {
        const url = "http://demo9197058.mockable.io/users";
        fetch(url, {
            method: "GET"
        }).then(response => response.json()).then(tableData => {
            this.setState({ tableData: tableData });
        })
    }
    onChangeList = (e) => {
        this.setState({ search: e.target.value });
    }
    redirection_To_Detail_View = (id, data) => {
        let path = id;
        console.log('Redirection Detail Data is', data)
        this.props.history.push(`/user/${path}`);
    }
    filteredData = () => {
        this.state.tableData.map((data) => {
            if (this.props.id == data.id) {
                this.detail_data = data;
            }
        })
        if (this.detail_data) {
            console.log('Detail data is ', this.detail_data);
        }
        return (<div>
            <b className="heading"> {this.detail_data.first_name + '   ' + this.detail_data.last_name}</b>
            <br /><br />
            <b className="DetailedData">{'Company'}</b>{'            '}<div className="right">{this.detail_data.last_name}</div><br />
            <b className="DetailedData">{'City'}</b>{'            '}<div className="right">{this.detail_data.city}</div><br />
            <b className="DetailedData">{'State'}</b>{'            '}<div className="right">{this.detail_data.state}</div><br />
            <b className="DetailedData">{'Zip'}</b>{'            '}<div className="right">{this.detail_data.zip}</div><br />
            <b className="DetailedData">{'Email'}</b>{'            '}<div className="right">{this.detail_data.email}</div><br />
            <b className="DetailedData">{'Web'}</b>{'            '}<div className="right">{this.detail_data.web}</div><br />
            <b className="DetailedData">{'Age'}</b>{'            '}<div className="right">{this.detail_data.age}</div><br />
        </div >)

    }
    render() {
        const { search } = this.state;
        const filteredNames = this.state.tableData.filter(data => {
            return data.first_name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
        console.log('Filtered Names', filteredNames);
        const columns = [
            {
                Header: "First Name",
                accessor: "first_name",
            },
            {
                Header: "Last Name",
                accessor: "last_name"
            },
            {
                Header: "Company Name",
                accessor: "company_name"
            },
            {
                Header: "City",
                accessor: "city"
            },
            {
                Header: "State",
                accessor: "state"
            },
            {
                Header: "Zip",
                accessor: "zip"
            },
            {
                Header: "Email",
                accessor: "email"
            },
            {
                Header: "Web",
                accessor: "web"
            },
            {
                Header: "Age",
                accessor: "age"
            },
            {
                Header: "Details",
                Cell: props => {
                    return (
                        <button className="blue" onClick={() => this.redirection_To_Detail_View(props.original.id, props.original)}>Details_View</button>
                    )
                }
            }
        ];

        return (
            <div>
                {console.log('Props id is', this.props.id)}
                {this.props.id ? this.filteredData(this.props.id) :
                    <div>
                        <input type="text" className="searchbar" label="Search FirstName" placeholder="Search By First Name" onChange={this.onChangeList} />
                        <ReactTable
                            className="react-table"
                            columns={columns}
                            data={filteredNames ? filteredNames : this.state.tableData}
                            defaultPageSize={5}
                        >
                        </ReactTable>
                    </div>}
            </div>
        );
    }
}

export default withRouter(TableView);
