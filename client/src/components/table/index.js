import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import { CircularProgress, Typography } from '@material-ui/core';

class Table extends Component {
    state = {
        data: [["Loading Data..."]],
        isLoading: false
      };
    
      componentDidMount() {
        this.getData();
      }
       // get data
  getData = () => {
    this.setState({ isLoading: true });
    let collumns = ["name", "othere1", "other2"]

    // go to the database (res)
    // let myarray =[]
    // loop in res[] myarry.push([res[i].name, res[i].dbdes, res[i].var1])
    this.xhrRequest().then(res => {

      this.setState({ data: res.data, isLoading: false});
    });
  }

  xhrRequest = () => {
    this.xhrRequest(`/api/users/event`).then(res => {
        this.setState({
          isLoading: false,
          data: res.data,
        });
      });
    };
  render() {

    const columns = ["Event Name", "Ticket Price", "Tickets Sold"];
    const { data, isLoading } = this.state;

    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'stacked',
      serverSide: true,
    
      onTableChange: (action, tableState) => {

        console.log(action, tableState);
        
      }
    };
    return (
      <div>
        <MUIDataTable title={<Typography variant="title">
          Ticket Sales
          {isLoading && <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}} />}
          </Typography>
          } data={data} columns={columns} options={options} />
      </div>
    );

  }
}
    

export default Table;
