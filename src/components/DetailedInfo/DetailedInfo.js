import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { getDetailedData } from "../../services/getDetailedData";
import TableCell from "../TableCell";
import ButtonForFilter from "../ButtonForFilter";

const DetailedInfo = (props) => {
  const [setData, setcurrencyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setcurrencyData(await getDetailedData());
    };
    fetchData();
    console.log();
  }, []);

  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div>
      <ButtonForFilter btnText={"Show all"} onClick={handleClick} />
      <table className="center">
        <thead>
          <tr>
            <th>
              <TableCell data="Open" />
            </th>
            <th>
              <TableCell data="High" />
            </th>
            <th>
              <TableCell data="Low" />
            </th>
            <th>
              <TableCell data="Close" />
            </th>
            <th>
              <TableCell data="Volume" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <TableCell data={setData.open} />
            </th>
            <th>
              <TableCell data={setData.high} />
            </th>
            <th>
              <TableCell data={setData.low} />
            </th>
            <th>
              <TableCell data={setData.close} />
            </th>
            <th>
              <TableCell data={setData.volume} />
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailedInfo;
