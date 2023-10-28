import React, { useState, useEffect } from "react";
import "./Mainsection.css";
import print_icon from "../Assets/icons-print.png";
import export_icon from "../Assets/icons-upload.png";
import send_icon from "../Assets/icons-send.png";
import plus_icon from "../Assets/icons-plus.png";
import filter_icon from "../Assets/icons-filter.png";
import Table from "../Table/Table";

function Mainsection(props) {
  const { items } = props;
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const receiveData = (data) => {
    if (data === true) {
      handleButtonClick();
    }
  };

  return (
    <div className="mainsection">
      <div className="box">
        {showMessage && (
          <div className="d-flex justify-content-center bg-danger ">
            <p className="text-white fs-4">Access denied</p>
          </div>
        )}
        <div className="master">
          <div className="master-left">
            <div className="master-title">
              <h2>Item Master </h2>
              <div className="count">8</div>
            </div>
            <div>
              <p>Keep track of your items</p>
            </div>
          </div>
          <div className="master-button">
            <button className="btn btn-primary" onClick={handleButtonClick}>
              <img src={print_icon} alt="" /> Print
            </button>
            <button className="btn btn-primary" onClick={handleButtonClick}>
              <img src={export_icon} alt="" /> Export
            </button>
            <button className="btn btn-primary" onClick={handleButtonClick}>
              Send <img src={send_icon} alt="" />
            </button>
            <button className="btn btn-primary" onClick={handleButtonClick}>
              Create <img src={plus_icon} alt="" />
            </button>
          </div>
        </div>
        <hr />
        <div className="sort">
          <div className="dropdowns">
            <div className="dropdown sort-dropdown">
              <label htmlFor=" " className="sortlabel">
                Search by
              </label>
              <button
                className="btn  dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All
              </button>
            </div>
            <div className="dropdown sort-dropdown">
              <label htmlFor="" className="sortlabel">
                Sort by
              </label>
              <button
                className="btn  dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All
              </button>
            </div>
            <div className="dropdown sort-dropdown">
              <label htmlFor="" className="sortlabel">
                sort order
              </label>
              <button
                className="btn  dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ascending
              </button>
            </div>
          </div>
          <div className="master-button align-items-center">
            <button className="btn btn-primary">
              <img src={filter_icon} alt="" /> Show
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={handleButtonClick}
            >
              {" "}
              Clear{" "}
            </button>
          </div>
        </div>
        <Table items={items} sendStatus={receiveData} />
      </div>
    </div>
  );
}

export default Mainsection;
