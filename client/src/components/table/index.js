import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { CircularProgress, Typography } from "@material-ui/core";
import Axios from "axios";

class Table extends Component {
  state = {
    data: [["Loading Data..."]],
    isLoading: true
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    Axios.get("/api/users/events").then(res => {
      const eventTickets = res.data;

      const ticketArray = [];
      for (let i = 0; i < eventTickets.length; i++) {
        ticketArray.push([
          eventTickets[i].name,
          "$ " + eventTickets[i].ticketPrice
        ]); //eventTickets[i].sold
        console.log(ticketArray);
      }
      this.setState({ isLoading: false, data: ticketArray });
    });
  };

  render() {
    const columns = ["Event Name", "Ticket Price", "Tickets Sold"];
    const { data, isLoading } = this.state;
    const options = {
      filter: true,
      filterType: "dropdown",
      responsive: "scroll",
      serverSide: true,
      selectableRows: false,

      onTableChange: (action, tableState) => {
        console.log(action, tableState);
      }
    };
    return (
      <div>
        <MUIDataTable
          title={
            <Typography variant="title">
              Ticket Sales
              {isLoading && (
                <CircularProgress
                  size={24}
                  style={{ marginLeft: 15, position: "relative", top: 4 }}
                />
              )}
            </Typography>
          }
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    );
  }
}

export default Table;
