import React, { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";

import { getCurrencyData } from "../../constants/getData";
import TableCell from "../TableCell";
import ButtonForFilter from "../ButtonForFilter";
import Favorite from "../Favorite";
import ItemStatus from "../ItemStatus";
import CheckBox from "../CheckBox/";
import { checkBoxes } from "../../constants/checkboxes";

import "./app.css";

function App() {
  const [currencyData, setcurrencyData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [changeColumns, setchangeColumns] = useState(false);
  const [showCheckboxColumn, setshowCheckboxColumn] = useState(checkBoxes);
  const [showColumn, setShowColumn] = useState([true, true, true]);
  const [loaded, setLoading] = useState(false);

  const changeLoaded = () => {
    setLoading(!loaded);
  };

  useEffect(() => {
    const fetchData = async () => {
      setcurrencyData(await getCurrencyData());
    };
    fetchData();
    changeLoaded();
  }, []);

  const changeFavorite = (id) => {
    const data = currencyData.map((item) => {
      if (id === item.id) {
        item.onFavorite = !item.onFavorite;
      }
      return item;
    });
    setcurrencyData(data);
  };

  const changeCheck = (id) => {
    const newCheck = showCheckboxColumn.map((item) => {
      if (id === item.name) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });
    setshowCheckboxColumn(newCheck);
  };

  const filterItems = (items, filter) => {
    if (filter === "all") {
      return items;
    }
    if (filter === "favorite") {
      return items.filter((item) => item.onFavorite);
    }
  };

  const onFilterChange = (filter) => {
    setFilter(filter);
  };

  const visibleItems = filterItems(currencyData, filter);

  const saveData = () => {
    setchangeColumns(!changeColumns);
    setShowColumn((prevState) => {
      return prevState.map(
        (item, index) => (item = showCheckboxColumn[index].isChecked)
      );
    });
  };

  return (
    <div>
      <ItemStatus filter={filter} onFilterChange={onFilterChange} />
      {!loaded ? (
        <div className="center-loader">
          <FadeLoader color={"#4336D7"} />
        </div>
      ) : (
        <div>
          <table className="center">
            <thead>
              <tr>
                <th className="border-off"></th>
                {showColumn[0] && (
                  <th className="cell-size">
                    <TableCell data="Slug" />
                  </th>
                )}
                {showColumn[1] && (
                  <th className="cell-size">
                    <TableCell data="Symbol" />
                  </th>
                )}
                {showColumn[2] && (
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
                      <Favorite
                        id={item.id}
                        style={
                          item.onFavorite
                            ? { color: "yellow" }
                            : { color: "grey" }
                        }
                        changeFavorite={changeFavorite}
                      />
                    </td>
                    {showColumn[0] && (
                      <td className="cell-size">
                        <TableCell data={item.slug.toUpperCase()} />
                      </td>
                    )}
                    {showColumn[1] && (
                      <td className="cell-size">
                        <TableCell data={item.symbol} />
                      </td>
                    )}
                    {showColumn[2] && (
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
                        <form>
                          <CheckBox
                            key={name}
                            id={name}
                            name={name}
                            checked={isChecked}
                            changeCheck={changeCheck}
                            value={name}
                          />
                        </form>
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
