import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "./Table";

function Home() {
  const [tiData, setTiData] = useState({});
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get("http://localhost:8000/data");
    setTiData(data?.regblocks?.[0]);
  };
  return (
    <div>
      <Table data={tiData?.registers?.[0]} />
    </div>
  );
}

export default Home;
