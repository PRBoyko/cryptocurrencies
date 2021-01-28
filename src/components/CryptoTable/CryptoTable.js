import React, { useState } from "react";
import { FadeLoader } from "react-spinners";
import { useHistory } from "react-router-dom";

import ItemStatus from "../ItemStatus";
import TableCell from "../TableCell";
import Favorite from "../Favorite";
import ButtonForFilter from "../ButtonForFilter";
import { checkBoxes } from "../../constants/checkboxes";

import "./crypto-table.css";

const CryptoTable = (props) => {
  const { currencyData, setcurrencyData, favorite, loaded } = props;
  const [filter, setFilter] = useState("all");
  const [changeColumns, setChangeColumns] = useState(false);
  const [showCheckboxColumn, setshowCheckboxColumn] = useState(checkBoxes);

  const history = useHistory();
  const handleClick = () => {
    history.push("/detailed");
  };

  const changeFavorite = (id) => {
    const data = currencyData.map((item) => {
      if (id === item.id) {
        item.onFavorite = !item.onFavorite;
      }

      return item;
    });
    localStorage.setItem(
      "favorite",
      JSON.stringify(data.filter((item) => item.onFavorite))
    );
    setcurrencyData(data);
  };

  const filterItems = (items) => {
    if (favorite) {
      return items.filter((item) => item.onFavorite);
    } else {
      return items;
    }
  };

  const visibleItems = filterItems(currencyData);

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
      <ItemStatus
        filter={filter}
        onFilterChange={(filter) => setFilter(filter)}
      />
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
                      <td className="cell-size cursor-pointer">
                        <TableCell
                          onClick={handleClick}
                          data={item.slug.toUpperCase()}
                        />
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
};

export default CryptoTable;
