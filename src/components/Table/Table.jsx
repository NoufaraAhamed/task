import React from "react";
import "./Table.css";

function Table(props) {
  const { items } = props;

  const sendStatus = ()=>{
    const data=true;
    props.sendStatus(data)
  }

  return (
    <table className="table ">
      <thead className="table-light">
        <tr>
          <th scope="col" className="ps-5 head">
            ITEM NAME
          </th>
          <th scope="col" className="head">
            ITEM CODE
          </th>
          <th scope="col" className="head">
            CATEGORY NAME
          </th>
          <th scope="col" className="head">
            LANDING COST
          </th>
          <th scope="col" className="head">
            SELLING RATE
          </th>
          <th scope="col" className="head">
            STOCK
          </th>
          <th scope="col" className="head">
            ACTIONS
          </th>
        </tr>
      </thead>
      <tbody>
        {items &&
          items.map((item) => (
            <tr key={item.itemId}>
              <td className="ps-5 head">{item.itemName}</td>
              <td className="head">{item.itemCode ? item.itemCode : '--'}</td>
              <td className="head">{item.categoryName ? item.categoryName : '--'}</td>
              <td className="head">{item.landingCost}</td>
              <td className="head">{item.sellingRate ? item.sellingRate : '--'}</td>
              <td className="head">{item.stock}</td>
              <td>
                <button className="btn btn-primary" onClick={sendStatus}>Edit</button>
                <button className="btn btn-danger ms-3" onClick={sendStatus}>Delete</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
