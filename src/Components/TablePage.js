import React from "react";
import { useState, useEffect } from "react";
import "./table.css";
import {useDispatch } from "react-redux";
import { tableDataAction } from "../TableRedux/Action/Action";
import { useSelector } from "react-redux";
import axios from "axios";
import TableData from "./Table2/TableData";

const TablePage = () => {
  const [tableData, setTableData] = useState([]);
  const dispatch = useDispatch()
  const selector = useSelector((state)=> state.table?.tableDataList?.tableData[0]?.content)
 console.log(selector, "from selector . ........ ")
 let  requiredArrayForm;
   if (selector){
    requiredArrayForm= Object.entries(selector)
    console.log(requiredArrayForm , "converting object into array")
   }


  useEffect(() => {
    

    axios
      .get(
        "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
      )
      .then((data) => {
        console.log(data);
        setTableData(data.data);
      })
      .catch((e) => e.message());
  }, []);


  let getdata  = () => {
   let requiredData = tableData["Time Series (5min)"]
   console.log(requiredData, "required dataaa")

   dispatch(tableDataAction(requiredData))
  }
  
  return (
    <div className="table-container">
      <table className = "table" >
      <tbody>

      <tr  >
     {requiredArrayForm?.map((each) => {
      return(
        <TableData  firstIndex ={ each[0] }    secondIndex = {each[1]}/>
      )
      
     })}
         
        </tr>
      </tbody>
       
      </table>
   <div className = "main-container  text-center ">
   <div className = "container-fluid ">
    <div className = "row ">
      <h1 className = "heading text-center">Click here to fetch the data from the provided API into Tabular form </h1>
    </div>
   </div>
   <button className="btn btn-primary btn-lg" onClick = {getdata} >
        Click here
      </button>
   </div>
      
    </div>
  );
};

export default TablePage;
