import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import axios from 'axios';

class Report extends Component{

    constructor(props) {
        super(props);
        this.state = {
          columnDefs: [{
            headerName: "Case Title", field: "title"
          }, {
            headerName: "Case Description", field: "description"
          }, {
            headerName: "Date of the theft", field: "occurred_at"
          }, {
            headerName: "Date of when the case was reported", field: "updated_at"
          }, {
            headerName: "Image", field:"media.image_url_thumb"   , 
            cellRenderer: function(params) {
                // console.log(params.value);
                if(params.value)
                return "<img src='" + params.value + "' width=50px /></span>"
                else
                return "<h6>N/A</h6>"
           }    
                            
          }],
          
          rowData: {result: []}
      }
    }

    

      componentDidMount(){
        axios.get('https://bikewise.org:443/api/v2/incidents?page=1&proximity_square=100')
          .then(response => {
            this.setState({ result: response.data.incidents });
            console.log(this.state.result)
          })
          .catch(function (error) {
            console.log(error);
          })
      }
     
      

    render(){
    
      return (
        
        <div
        className="ag-theme-balham"
        style={{
        height: '500px',
        width: '1000px' }}
      >
          <h4>List of Stolen Bikes</h4>
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.result}>
        </AgGridReact>
      </div> );
      }
}

export default Report