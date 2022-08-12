import React from 'react'


const TableData = ({firstIndex, secondIndex}) => {

    console.log(firstIndex, secondIndex,  "first indexvalue and second index value")
     console.log(firstIndex, "first index");
     console.log(secondIndex, "second index");
    return (
    <div>
       <table class = "table table-hover table-primary" >
       <thead className = "table-dark white-text">
      <tr>
          <td scope = "col-3">Date  Time</td>
          <td  scope = "col-2">Open</td>
          <td  scope = "col-2">High</td>
          <td  scope = "col-2">Low</td>
          <td  scope = "co-2">Close</td>
          <td  scope = "col-2">Volume</td>
        </tr>
      </thead>
        <tbody>
            <tr>
                <td scope = "col-2">{firstIndex}</td>
                <td scope = "col-2">{secondIndex["1. open"]}</td>
                <td scope = "col-2">{secondIndex["2. high"]}</td>
                <td scope = "col-2">{secondIndex["3. low"]}</td>
                <td scope = "col-2">{secondIndex["4. close"]}</td>
                <td scope = "col-2">{secondIndex["5. volume"]}</td>
               
                
            </tr>
        </tbody>
       </table>
    </div>
  )
}

export default TableData
