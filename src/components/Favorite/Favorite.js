import React from 'react';
import StarIcon from '@material-ui/icons/Star';

const Favorite = (props) => {
    return (
          <StarIcon  style={props.style} onClick={()=>{props.changeFavorite(props.id)}} />

    );
};

export default Favorite;