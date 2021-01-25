import React, { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";

import { getCurrencyData } from "../../services/getData";
import TableCell from "../TableCell";
import ButtonForFilter from "../ButtonForFilter";
import Favorite from "../Favorite";
import ItemStatus from "../ItemStatus";
import { checkBoxes } from "../../constants/checkboxes";

import "./App.css";

function App() {
  const [currencyData, setcurrencyData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [changeColumns, setChangeColumns] = useState(false);
  const [showCheckboxColumn, setshowCheckboxColumn] = useState(checkBoxes);
  const [loaded, setLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setcurrencyData(await getCurrencyData());
      setLoading(true);
    };
    fetchData();

  }, []);


  const changeFavorite = (id) => {
    const data = currencyData.map((item) => {
      if (id === item.id) {
        item.onFavorite = !item.onFavorite;
      }

      return item;

    });
    localStorage.setItem('favorite', JSON.stringify(data.filter(item=>item.onFavorite)));
    setcurrencyData(data);
  };

  const filterItems = (items, filter) => {
    if (filter === "all") {
      return items;
    }
    if (filter === "favorite") {
      return items.filter((item) => item.onFavorite);
    }
  };

  const visibleItems = filterItems(currencyData, filter);

  const saveData = () => {
    let checkStatus = showCheckboxColumn.map((item) => item.isChecked);
    setChangeColumns(!changeColumns);

    if (Array.from(document.querySelectorAll("input")).length < 1) {
      setshowCheckboxColumn(showCheckboxColumn);
    } else {
      checkStatus = Array.from(document.querySelectorAll("input")).map(
        (item) => {
          if (item["checked"]) {
            return true;
          } else {
            return false;
          }
        }
      );

      const newCheck = showCheckboxColumn.map((item, index) => {
        showCheckboxColumn[index].isChecked = checkStatus[index];

        return item;
      });

      setshowCheckboxColumn(newCheck);
    }
  };

  const showStars = () => {
    return (
      showCheckboxColumn
        .map((item) => item.isChecked)
        .filter((item) => item !== false).length > 0
    );
  };

  return (
    <div>
      <ItemStatus filter={filter} onFilterChange={(filter)=>setFilter(filter)} />
      {!loaded ? (
        <div className="center-loader">
          <FadeLoader color={"#4336D7"} />
        </div>
      ) : (
        <div>
          <table className="center">
            <thead>
              <tr>
                {showStars() && <th className="border-off"></th>}
                {showCheckboxColumn[0].isChecked && (
                  <th className="cell-size">
                    <TableCell data="Slug" />
                  </th>
                )}
                {showCheckboxColumn[1].isChecked && (
                  <th className="cell-size">
                    <TableCell data="Symbol" />
                  </th>
                )}
                {showCheckboxColumn[2].isChecked && (
                  <th className="cell-size">
                    <TableCell data="Price_USD" />
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {visibleItems.map((item) => {
                return (
                  <tr key={item.id}>
                    <td className="border-off">
                      {showStars() && (
                        <Favorite
                           id={item.id}
                          style={
                            item.onFavorite
                              ? { color: "yellow" }
                              : { color: "grey" }
                          }
                          changeFavorite={changeFavorite}
                        />
                      )}
                    </td>
                    {showCheckboxColumn[0].isChecked && (
                      <td className="cell-size">
                        <TableCell data={item.slug.toUpperCase()} />
                      </td>
                    )}
                    {showCheckboxColumn[1].isChecked && (
                      <td className="cell-size">
                        <TableCell data={item.symbol} />
                      </td>
                    )}
                    {showCheckboxColumn[2].isChecked && (
                      <td className="cell-size">
                        <TableCell data={item.metrics} />
                      </td>
                    )}
                  </tr>
                );
              })}

              {changeColumns ? (
                <tr>
                  <td className="border-off"></td>
                  {showCheckboxColumn.map((item) => {
                    const { name, isChecked } = item;
                    return (
                      <td className="border-off">
                        <input
                          name={name}
                          type="checkbox"
                          defaultChecked={isChecked}
                        />
                        <label>{name}</label>
                      </td>
                    );
                  })}
                </tr>
              ) : null}
            </tbody>
          </table>

          <div className="edit-button-centred">
            <ButtonForFilter
              onClick={saveData}
              btnText={changeColumns ? "Save changes" : "Edit Table"}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
