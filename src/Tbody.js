import React, { useEffect, useState } from "react";

function TBody({ data }) {
  const givenFields = data?.fields;
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

  console.log({ givenFields });

  let obj = {};
  for (const elem of givenFields || []) {
    if (elem.start === elem.stop) {
      obj[elem.start] = 0;
    }
    // else {
    //     obj[elem.start + "" + elem.stop] = elem.stop - elem.stop;
    //   }
  }
  //   setVal({ ...obj });

  console.log(arr);
  return (
    <tbody
      //   className="style-scope ti-widget-registergrid"
      className="style-scope ti-widget-registergrid"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <tr
        style={{
          height: "28px",
          fontWeight: "bold",
          backgroundColor: "white",
        }}
        className="style-scope ti-widget-registergrid"
      >
        <td
          align="center"
          rowspan="2"
          style={{ minWidth: "201px", borderRight: "none" }}
          className="style-scope ti-widget-registergrid"
        >
          {data?.name}
        </td>
        <td
          align="center"
          rowspan="2"
          style={{ minWidth: "201px", borderRight: "none" }}
          className="style-scope ti-widget-registergrid"
        >
          {data?.addr}
        </td>
        <td
          align="center"
          rowspan="2"
          style={{ minWidth: "201px", borderRight: "none" }}
          className="style-scope ti-widget-registergrid"
        >
          {data?.value}
        </td>
        <td>
          {Object.keys(obj).length &&
            [...Array(16).keys()].reverse()?.map((elem) => (
              <td
                className="regcol style-scope ti-widget-registergrid"
                style={{
                  //   minWidth: "25px",
                  backgroundColor: "transparent",
                  color: "black",
                }}
                id="bit_1.0.7"
              >
                <span
                  style={{
                    border: "none",
                    textAlign: "center",
                    minWidth: "21px",
                    backgroundColor: "transparent",
                    color: "black",
                  }}
                  id="bitspan_1.0.7"
                  className="style-scope ti-widget-registergrid"
                >
                  {String(elem) in obj ? 0 : 1}
                </span>
              </td>
            ))}
        </td>
      </tr>
    </tbody>
  );
}

export default TBody;
