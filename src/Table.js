import React from "react";
import Fields from "./Fields";
import Tbody from "./Tbody";
import Thead from "./Thead";

function Table({ data }) {
  console.log({ data });

  return (
    <div
      id="virtualGrid"
      className="container flex-horizontal style-scope ti-widget-registerview"
      style={{ height: "100%", width: "100%", overflowY: "hidden" }}
    >
      <div
        id="registerGrid"
        className="flexchild style-scope ti-widget-registerview x-scope ti-widget-registergrid-0"
        max-bit-width="16"
      >
        <div
          id="container"
          tabindex="0"
          className="style-scope ti-widget-registergrid"
        >
          <div
            id="registergrid_div"
            tabindex="-1"
            className="style-scope ti-widget-registergrid"
          >
            <section
              id="section"
              className="style-scope ti-widget-registergrid"
            >
              <div
                id="table_registergrid_div"
                className="style-scope ti-widget-registergrid"
              >
                <table
                  id="table_registergrid"
                  align="left"
                  className="style-scope ti-widget-registergrid"
                >
                  <Thead />
                  <Tbody data={data} />
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
