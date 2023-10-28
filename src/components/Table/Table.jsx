import React from "react";
import "./Table.css";

function Table(props) {
  const { items } = props;

  return (
    <table className="table">
      <thead className="table-light">
        <tr>
          <th scope="col">ITEM NAME</th>
          <th scope="col">ITEM CODE</th>
          <th scope="col">CATEGORY NAME</th>
          <th scope="col">LANDING COST</th>
          <th scope="col">SELLING RATE</th>
          <th scope="col">STOCK</th>
          <th scope="col">ACTIONS</th>
        </tr>
      </thead>
      <tbody>
      { items && items.map((item) => (
         
          <tr key={item.itemId}>
            <td>{item.itemName}</td>
            <td>{item.itemCode}</td>
            <td>{item.categoryName}</td>
            <td>{item.landingCost}</td>
            <td>{item.sellingRate}</td>
            <td>{item.stock}</td>
            <td>
              <button className="btn btn-primary">edit</button>
              <button className="btn btn-danger ms-3">delete</button>
            </td>
          </tr>
        ))}
       
      </tbody>
    </table>
  );
}

export default Table;
