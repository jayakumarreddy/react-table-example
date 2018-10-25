import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import "./style.css";
import { connect } from 'react-redux';
import { getData } from "../../actions/getData";

class ShowReactTable extends Component {
    constructor(props){
        super(props);
        this.state = {
          sorted: []
        }
      }
    componentDidMount(){
      console.log("inside component did mount");
      this.props.dispatch(getData());
    }
      getSortedComponent = (id) =>{
        let sortInfo = this.state.sorted.filter(item => item.id === id);
        if (sortInfo.length) {
          // console.log('getSortedComponent sortInfo:',sortInfo[0].desc);
          if (sortInfo[0].desc === true) return <i className="fa fa-sort-desc sort-icons" aria-hidden="true"></i>;
          if (sortInfo[0].desc === false) return <i className="fa fa-sort-asc sort-icons" aria-hidden="true"></i>;
        }
        return <i className="fa fa-sort sort-icons" aria-hidden="true"></i>;
      }
    
      render() {
        console.log("table data", this.props.tableData);
        const { tableData } = this.props;
        const { getSortedComponent } = this;
        const { sorted } = this.state;
        console.log("sorted is", sorted);
        const customHeaderIcons = () => { 
          return {
            Header: props => {
              console.log("props", props);
              const Sorted = getSortedComponent(props.column.id);
              return (
                <span>
                  {props.column.headerText} {Sorted}
                </span>
              );
            },
            headerStyle: { boxShadow: "none" },
            maxWidth: 500
          };
        };
    
       const data = tableData.data;
       const columns =[
         {
           ...customHeaderIcons(),
           headerText: "id",
           accessor: "id"
         },
         {
           ...customHeaderIcons(),
           headerText: "Title",
           accessor: "title",
           className: "table-title-column"
         }
       ];
        return (
          <div className="App">
          {tableData.dataRequested && <h1>Loading...</h1>}
          {tableData.dataFulfilled &&
          <ReactTable
          data={data}
          columns={columns}
          sorted={sorted}
          onSortedChange={sorted => this.setState({ sorted })}
          defaultPageSize={20}
          minRows = {0}
          className="-highlight"
          />
          }
          {tableData.dataError && <h1>Error in Fetching the Data...</h1>}
          </div>
        );
      }
}

function mapStateToProps(state){
  return {
    tableData : state.SampleData
  }
}
export default connect(mapStateToProps)(ShowReactTable);