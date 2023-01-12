import React from "react";

function Thead() {
  let arr = [
    { id: 15, name: "", val: "" },
    { id: 14, name: "", val: "" },
    { id: 13, name: "", val: "" },
    { id: 12, name: "", val: "" },
    { id: 11, name: "", val: "" },
    { id: 10, name: "", val: "" },
    { id: 9, name: "", val: "" },
    { id: 8, name: "", val: "" },
    { id: 7, name: "", val: "" },
    { id: 6, name: "", val: "" },
    { id: 5, name: "", val: "" },
    { id: 4, name: "", val: "" },
    { id: 3, name: "", val: "" },
    { id: 2, name: "", val: "" },
    { id: 1, name: "", val: "" },
    { id: 0, name: "", val: "" },
  ];
  return (
    <thead
      style={{ position: "sticky" }}
      className="style-scope ti-widget-registergrid"
    >
      <tr
        style={{
          height: "28px",
          fontWeight: "bold",
          backgroundColor: "white",
        }}
        className="style-scope ti-widget-registergrid"
      >
        <th
          align="center"
          rowspan="2"
          style={{ minWidth: "201px", borderRight: "none" }}
          className="style-scope ti-widget-registergrid"
        >
          Register Name
        </th>
        <th
          align="center"
          rowspan="2"
          style={{ minWidth: "18px", borderLeft: "none" }}
          className="style-scope ti-widget-registergrid"
        ></th>
        <th
          align="center"
          rowspan="2"
          style={{ minWidth: "71px" }}
          className="style-scope ti-widget-registergrid"
        >
          Address
        </th>
        <th
          align="center"
          rowspan="2"
          style={{ width: "101px" }}
          className="style-scope ti-widget-registergrid"
        >
          Value
        </th>

        <th
          align="center"
          style={{ minWidth: "" }}
          className="style-scope ti-widget-registergrid"
          colspan="16"
        >
          Bits
        </th>
      </tr>

      <tr
        style={{ backgroundColor: "white" }}
        className="style-scope ti-widget-registergrid"
      >
        <th
          className="th2 style-scope ti-widget-registergrid"
          align="center"
          style={{ minWidth: "25px" }}
        >
          15
        </th>

        <th
          className="th2 style-scope ti-widget-registergrid"
          align="center"
          style={{ minWidth: "25px" }}
        >
          14
        </th>

        <th
          className="th2 style-scope ti-widget-registergrid"
          align="center"
          style={{ minWidth: "25px" }}
        >
          13
        </th>

        <th
          className="th2 style-scope ti-widget-registergrid"
          align="center"
          style={{ minWidth: "25px" }}
        >
          12
        </th>

        <th
          className="th2 style-scope ti-widget-registergrid"
          align="center"
          style={{ minWidth: "25px" }}
        >
          11
        </th>

        <th
          className="th2 style-scope ti-widget-registergrid"
          align="center"
          style={{ minWidth: "25px" }}
        >
          10
        </th>

        <th
          className="th2 style-scope ti-widget-registergrid"
          align="center"
          style={{ minWidth: "25px" }}
        >
          9
        </th>

        <th
          className="th2 style-scope ti-widget-registergrid"
          align="center"
          style={{ minWidth: "25px" }}
        >
          8
        </th>

        <th
          className="th2 style-scope ti-widget-registergrid"
          align="center"
          style={{ minWidth: "25px" }}
        >
          7
        </th>

        <th
          className="th2 style-scope ti-widget-registergrid"
          align="center"
          style={{ minWidth: "25px" }}
        >
          6
        </th>

        <th
          className="th2 style-scope ti-widget-registergrid"
          align="center"
          style={{ minWidth: "25px" }}
        >
          5
        </th>

        <th
          className="th2 style-scope ti-widget-registergrid"
          align="center"
          style={{ minWidth: "25px" }}
        >
          4
        </th>

        <th
          className="th2 style-scope ti-widget-registergrid"
          align="center"
          style={{ minWidth: "25px" }}
        >
          3
        </th>

        <th
          className="th2 style-scope ti-widget-registergrid"
          align="center"
          style={{ minWidth: "25px" }}
        >
          2
        </th>

        <th
          className="th2 style-scope ti-widget-registergrid"
          align="center"
          style={{ minWidth: "25px" }}
        >
          1
        </th>

        <th
          className="th2 style-scope ti-widget-registergrid"
          align="center"
          style={{ minWidth: "25px" }}
        >
          0
        </th>
      </tr>
    </thead>
  );
}

export default Thead;
