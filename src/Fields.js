import React, { useEffect, useState } from "react";

function Fields({ data }) {
  const [load, setLoad] = useState(false);
  const [val, setVal] = useState({});
  console.log("filed data", { data });

  useEffect(() => {
    data?.length && initialize();
  }, []);

  const initialize = () => {
    let obj = {};
    for (const elem of data || []) {
      if (elem.start === elem.stop) {
        obj[elem.start] = 0;
      } else {
        obj[elem.start + "" + elem.stop] = elem.stop - elem.stop;
      }
    }
    setVal({ ...obj });
    console.log({ obj });
  };
  console.log({ val });
  let arr = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  const tdClickHandler = (elem) => {
    setLoad(!load);
    String(elem) in val &&
      setVal((prevState) => {
        return { ...prevState, [elem]: val[elem] === 0 ? 1 : 0 };
      });
  };

  return (
    <div>
      <tr>
        {arr?.map((elem) => (
          <td onClick={() => tdClickHandler(elem)}>
            {String(elem) in val ? 0 : 1}
          </td>
        ))}
      </tr>
    </div>
  );
}

export default Fields;
