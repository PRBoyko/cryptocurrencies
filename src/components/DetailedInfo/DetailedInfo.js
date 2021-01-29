import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";

import { getDetailedData } from "../../services/getDetailedData";
import TableCell from "../TableCell";
import ButtonForFilter from "../ButtonForFilter";

import { useParams } from "react-router";
import "./detailed-info.css";

const DetailedInfo = () => {
  const [setData, setcurrencyData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDetailedData(id);

      if (data) {
        setcurrencyData(data);
      }
    };
    setLoaded(true);
    fetchData();
  }, []);

  return (
    <div>
      <Link className="remove-decoration" to="/">
        <ButtonForFilter btnText={"Show all"} />
      </Link>

      {!loaded ? (
        <div className="center-loader ">
          <FadeLoader color={"#4336D7"} />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default DetailedInfo;
