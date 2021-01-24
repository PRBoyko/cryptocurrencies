import React from "react";

import StarIcon from "@material-ui/icons/Star";

const Favorite = ({ style, changeFavorite, id }) => {
  return (
    <StarIcon
      style={style}
      onClick={() => {
        changeFavorite(id);
      }}
    />
  );
};

export default Favorite;
